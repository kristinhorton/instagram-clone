import { create } from 'zustand'

/**
 * Hook for authenticated user state management
* @param {Function}  create - function used to create the store
* @param {Function}  set - function used to update store state
*/
const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user-info')),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user })
}))

export default useAuthStore