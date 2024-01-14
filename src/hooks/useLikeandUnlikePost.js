import { useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import usePostStore from "../store/postStore"

import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

const useLikeandUnlikePost = (post) => {
    const [isLoading, setIsLoading] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid))
    const [likes, setLikes] = useState(post.likes.length)
    const incrementPostLikeCount = usePostStore((state) => state.addLike)
    const decrementPostLikeCount = usePostStore((state) => state.removeLike)

    const showToast = useShowToast()

    const handleLikeAndUnlike = async () => {
        if (isLoading) return
        setIsLoading(true)
        try {
            if (!authUser) throw Error('You must log in to like a post')

            //update the post
            const postRef = doc(db, 'posts', post.id)
            await updateDoc(postRef, {
                likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
            })

            //update number of likes in state
            setIsLiked(!isLiked)
            isLiked ? setLikes(likes - 1) : setLikes(likes + 1)

            //update post store state
            isLiked
                ? decrementPostLikeCount(post.id, authUser.uid)
                : incrementPostLikeCount(post.id, authUser.uid)

        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            setIsLoading(false)
        }
    }

    return { isLiked, likes, handleLikeAndUnlike, isLoading }
}

export default useLikeandUnlikePost