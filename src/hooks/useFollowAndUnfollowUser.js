import { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore'
import useUserProfileStore from '../store/userProfileStore'
import useShowToast from './useShowToast'
import { db } from '../firebase/firebase'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const useFollowAndUnfollowUser = (userId) => {
    const [isFollowingOrUnfollowing, setIsFollowingOrUnfollowing] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const setAuthUser = useAuthStore((state) => state.setUser)
    const { userProfile, setUserProfile } = useUserProfileStore()
    const showToast = useShowToast()

    const handleFollowAndUnfollow = async () => {
        setIsFollowingOrUnfollowing(true)
        try {
            //grab the authenticated user, and the user to follow or unfollow
            const currentUserRef = doc(db, 'users', authUser.uid)
            const userToFollowOrUnfollow = doc(db, 'users', userId)

            //update the following array for the authenticated user
            await updateDoc(currentUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
            })

            //update the followers array for the user we're following/unfollowing
            await updateDoc(userToFollowOrUnfollow, {
                followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
            })

            if (isFollowing) {
                //unfollow
                //remove user to unfollow from authenticated user's following array
                setAuthUser({
                    ...authUser,
                    following: authUser.following.filter(uid => uid !== userId)
                })

                //remove authenticated user from user to unfollow's followers array
                setUserProfile({
                    ...userProfile,
                    followers: userProfile.followers.filter(uid => uid !== authUser.uid)
                })

                //update local storage for authenticated user
                localStorage.setItem('user-info', JSON.stringify({
                    ...authUser,
                    following: authUser.following.filter(uid => uid !== userId)
                }))

                //update isFollowing state
                setIsFollowing(false)
            } else {
                //follow
                //add user to follow to authenticated user's following array
                setAuthUser({
                    ...authUser,
                    following: [...authUser.following, userId]
                })

                //add authenticated user to user to follow's followers array
                setUserProfile({
                    ...userProfile,
                    followers: [...userProfile.followers, authUser.uid]
                })

                //update local storage for authenticated user
                localStorage.setItem('user-info', JSON.stringify({
                    ...authUser,
                    following: [...authUser.following, userId]
                }))

                //update isFollowingState
                setIsFollowing(true)
            }
        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            //update isFollowingOrUnfollowing state
            setIsFollowingOrUnfollowing(false)
        }
    }

    useEffect(() => {
        if (authUser) {
            const isFollowing = authUser.following.includes(userId);
            setIsFollowing(isFollowing);
        }
    }, [authUser, userId]);

    return { isFollowing, isFollowingOrUnfollowing, handleFollowAndUnfollow }
}

export default useFollowAndUnfollowUser