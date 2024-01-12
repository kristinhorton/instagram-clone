import { create } from "zustand";

/**
 * Hook for posts state management
* @param {Function}  create - function used to create the store
* @param {Function}  set - function used to update store state
*/
const usePostStore = create((set) => ({
    posts: [],
    //adds new post to beginning of posts array
    createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    //removes post from post array
    deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
    //sets the current value of posts
    setPosts: (posts) => set({ posts }),
    //adds a new comment to an existing post
    addComment: (postId, comment) =>
        set((state) => ({
            posts: state.posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, comment],
                    };
                }
                return post;
            }),
        })),
}));

export default usePostStore;