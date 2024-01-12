import { create } from 'zustand'

/**
 * Hook for profile state management
* @param {Function}  create - function used to create the store
* @param {Function}  set - function used to update store state
*/
const useUserProfileStore = create((set) => ({
    userProfile: null,
    //updates the user profile state
    setUserProfile: (userProfile) => set({ userProfile }),

    //increments the number of posts on the user's profile by adding the post id to the posts array in state
    addPost: (post) => set(state => ({
        userProfile: {
            ...state.userProfile,
            posts: [post.id, ...state.userProfile.posts]
        }
    })),

    //decrements the number of posts on the user's profile by removing the postId from the posts array in state
    deletePost: (postId) => set(state => ({
        userProfile: {
            ...state.userProfile,
            posts: state.userProfile.posts.filter((id) => id !== postId)
        }
    }))
}))

export default useUserProfileStore