import { create } from "zustand";

/**
 * Hook for posts state management
* @param {Function}  create - function used to create the store
* @param {Function}  set - function used to update store state
*/
const usePostStore = create((set) => ({
    /**
     * Array of posts
     */
    posts: [],
    /**
     * Updates the entire posts array
     * @param {Array} posts array of post objects
     */
    setPosts: (posts) => set({ posts }),

    /**
     * Adds a new post to the posts array
     * @param {Object} post new post object to add
     */
    createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),

    /**
     * Removes a post from the posts array
     * @param {String} postId
     */
    deletePost: (postId) => set((state) => ({ posts: state.posts.filter((post) => post.id !== postId) })),

    /**
     * Adds a comment to a post
     * @param {String} postId id f the post to edit
     * @param {String} comment the new comment to add
     */
    addComment: (postId, comment) =>
        set((state) => ({
            //map all posts until you find the post we want to add to
            posts: state.posts.map((post) => {
                if (post.id === postId) {
                    //add the new comment to the comments array
                    return {
                        ...post,
                        comments: [...post.comments, comment],
                    };
                }
                return post
            }),
        })),


    //TODO: add remove comment functionality

    /**
     * Adds a like to a post
     * @param {String} postId id of the post to edit
     * @param {String} userId id of the user who liked the post
     * @returns 
     */
    addLike: (postId, userId) =>
        set((state) => ({
            //map all posts until you find the post we want to add the like to
            posts: state.posts.map((post) => {
                if (post.id === postId) {
                    //add the user id to the likes array
                    return {
                        ...post,
                        likes: [...post.likes, userId],
                    };
                }
                return post
            }),
        })),

    /**
     * Removes a like from a post
     * @param {String} postId 
     * @param {String} userId 
     * @returns 
     */
    removeLike: (postId, userId) =>
        set((state) => ({
            //map all posts until you find the post we want to remove the like from
            posts: state.posts.map((post) => {
                if (post.id === postId) {
                    //remove the user id from the likes array
                    return {
                        ...post,
                        likes: post.likes.filter(likedBy => likedBy !== userId),
                    };
                }
                return post
            }),
        })),
}))

export default usePostStore;