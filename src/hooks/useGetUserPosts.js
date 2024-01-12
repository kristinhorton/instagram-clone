import { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useUserProfileStore from '../store/userProfileStore'
import useShowToast from './useShowToast'
import { db } from '../firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const useGetUserPosts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { posts, setPosts } = usePostStore()
    const userProfile = useUserProfileStore((state) => state.userProfile)
    const showToast = useShowToast()

    useEffect(() => {
        const getPosts = async () => {
            if (!userProfile) return
            setIsLoading(true)
            setPosts([])

            try {
                //query the db for all posts created by the user profile
                const q = query(collection(db, 'posts'), where('createdBy', '==', userProfile.uid))
                const querySnapshot = await getDocs(q)

                const posts = []
                querySnapshot.forEach(doc => {
                    posts.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                
                //sort posts in descending order by createdAt date
                posts.sort((a, b) => b.createdAt - a.createdAt)
                setPosts(posts)

            } catch (error) {
                showToast('Error', error.message, 'error')
                setPosts([])
            }finally{
                setIsLoading(false)
            }
        }
        getPosts()
    }, [setPosts, userProfile, showToast])

    return { isLoading, posts }
}

export default useGetUserPosts