import useAuthStore from '../store/authStore'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import { db } from '../firebase/firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'

/**
 * Custom hook for adding comments to a post
 */
const useCreatePostComment = () => {
    const [isCommenting, setIsCommenting] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const addComment = usePostStore((state) => state.addComment)

    const showToast = useShowToast()

    /**
     * Adds a comment to a post
     * @param {Number} id 
     * @param {String} comment 
     * @returns {Boolean} isCommenting true while a new comment is in progress, false otherwise
     * @returns {Function} handlePostComment
     */
    const handlePostComment = async (id, comment) => {
        //if handlePostComment is already in progress do nothing
        if (isCommenting) return
        //if user isn't authenticated throw an error
        if (!authUser) throw Error('You must be logged in to comment')

        setIsCommenting(true)
        const newComment = {
            comment: comment,
            postId: id,
            createdAt: Date.now(),
            createdBy: authUser.uid
        }

        try {
            //add the new comment to the related post in the posts table
            await updateDoc(doc(db, 'posts', id), {
                comments: arrayUnion(newComment)
            })

            //update post store state to include new comment
            addComment(id, newComment)

        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            setIsCommenting(false)
        }
    }

    return { isCommenting, handlePostComment }
}

export default useCreatePostComment