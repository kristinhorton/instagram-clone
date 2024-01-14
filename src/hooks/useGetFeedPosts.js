import { useEffect, useState } from "react"
import usePostStore from '../store/postStore'
import useAuthStore from '../store/authStore'
import useUserProfileStore from '../store/userProfileStore'
import useShowToast from './useShowToast'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useGetFeedPosts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { posts, setPosts } = usePostStore()
    const authUser = useAuthStore((state) => state.user)
    const { setUserProfile } = useUserProfileStore()
    const showToast = useShowToast()

    useEffect(() => {
        const getFeedPosts = async () => {
            setIsLoading(true)
            //if user is not following other users there are no posts to display
            if (authUser.following.length === 0) {
                setIsLoading(false)
                setPosts([])
                return
            }

            try {
                //query db for posts by users in the auth user's following array
                const q = query(collection(db, 'posts'), where('createdBy', 'in', authUser.following))
                const querySnapshot = await getDocs(q)

                //push queried posts to the feedPosts array to be sorted
                const feedPosts = []
                querySnapshot.forEach((doc) => {
                    feedPosts.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                //sort posts in descending order by createdAt date
                feedPosts.sort((a, b) => b.createdAt - a.createdAt)
                //update posts state
                setPosts(feedPosts)

            } catch (error) {
                showToast('Error loading posts', error.message, 'error')
            } finally {
                setIsLoading(false)
            }
        }

        if (authUser) getFeedPosts()
    }, [authUser, setUserProfile, setPosts, showToast])

    return { isLoading, posts }
}

export default useGetFeedPosts