import { useState } from 'react'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'
import useUserProfileStore from '../store/userProfileStore'
import usePostStore from '../store/postStore'

import { db, storage } from '../firebase/firebase'
import { deleteObject, ref } from 'firebase/storage'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'

/**
 * Custom hook for deleteing a user post
 * @returns {Boolean} isDeleting true while delete is in progress, false otherwise
 * @returns {Function} handleDeletePost
 */
const useDeletePost = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const userProfile = useUserProfileStore((state) => state.userProfile)
    const deletePost = usePostStore((state) => state.deletePost)
    const decrementProfilePostCount = useUserProfileStore((state) => state.deletePost)

    const showToast = useShowToast()

    /**
     * Deletes a post
     * @param {Object} post to be deleted
     */
    const handleDeletePost = async (post) => {
        setIsDeleting(true)
        try {
            //remove post from storage
            const imageRef = ref(storage, `posts/${post.id}`)
            await deleteObject(imageRef)

            const userRef = doc(db, 'users', authUser.uid)
            //remove post from posts table
            await deleteDoc(doc(db, 'posts', post.id))
            //remove post from user posts array
            await updateDoc(userRef, {
                posts: arrayRemove(post.id)
            })

            //update post store state
            deletePost(post.id)

            //update the user profile store state
            if (userProfile.uid === authUser.uid) decrementProfilePostCount(post.id)

            showToast('Success', 'Post deleted successfully', 'success')

        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            setIsDeleting(false)
        }
    }

    return { isDeleting, handleDeletePost }

}

export default useDeletePost