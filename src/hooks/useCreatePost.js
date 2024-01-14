import { useState } from 'react'
import useShowToast from './useShowToast'
import { db, storage } from '../firebase/firebase'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import useAuthStore from '../store/authStore'
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'
import usePostStore from '../store/postStore'
import useUserProfileStore from '../store/userProfileStore'

/**
 * Custom hook for creating a post
 * @returns {Boolean} isLoading true while creating a post, false otherwise
 * @returns {Function} handleCreatePost
 */
const useCreatePost = () => {
    const [isLoading, setIsLoading] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const userProfile = useUserProfileStore((state) => state.userProfile)
    const createPost = usePostStore((state) => state.createPost)
    const addPost = useUserProfileStore((state) => state.addPost)

    const showToast = useShowToast()

    /**
     * 
     * @param {String} caption of the new post
     * @param {File} selectedFile image to upload
     * @param {String} pathname current location
     */
    const handleCreatePost = async (caption, selectedFile, pathname) => {
        if (isLoading) return
        if (!selectedFile) throw new Error("Please select an image")
        setIsLoading(true)
        const newPost = {
            caption: caption,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,
        }

        try {
            //the ref to the posts table where the post will go
            const postRef = await addDoc(collection(db, "posts"), newPost)
            //the ref to the users table where the authUser exists
            const userRef = doc(db, "users", authUser.uid)
            //the location in storage where the image will go
            const imageRef = ref(storage, `posts/${postRef.id}`)

            //add the new post to the auth user in the users table
            await updateDoc(userRef, { posts: arrayUnion(postRef.id) })
            //upload the image url to storage
            await uploadString(imageRef, selectedFile, "data_url")

            //grab the new img url
            const downloadURL = await getDownloadURL(imageRef)
            //update the post img url in the posts table
            await updateDoc(postRef, { imageURL: downloadURL })

            //add the img url to the newPost object to update the userProfileStore
            newPost.imageURL = downloadURL

            //update the user profile state with create post
            if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postRef.id })

            // //update the user profile  state with add post
            // if (pathname !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postRef.id })

        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, handleCreatePost }

}

export default useCreatePost