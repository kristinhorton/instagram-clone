import { useEffect, useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"

const useGetSuggestedUsers = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [suggestedUsers, setSuggestedUsers] = useState([])
    const authUser = useAuthStore(state => state.user)
    const showToast = useShowToast()

    useEffect(() => {
        //get suggested users
        const getSuggestedUsers = async () => {
            setIsLoading(true)
            try {
                const usersRef = collection(db, 'users')
                //query for users who aren't the authenticated user or in the authenticated user's following array
                const q = query(
                    usersRef,
                    where('uid', 'not-in', [authUser.uid, ...authUser.following]),
                    orderBy('uid'),
                    limit(5)
                )
                //create a query snapshot
                const querySnapshot = await getDocs(q)

                //push each user from query snapshot into users array
                const users = []
                querySnapshot.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                })
                //set suggestedUsers
                setSuggestedUsers(users)
            } catch (error) {
                showToast('Error', error.message, 'error')
            } finally {
                setIsLoading(false)
            }
        }

        //if user is authenticated get suggeseted users
        if (authUser) getSuggestedUsers()
    }, [authUser, showToast])

    return { isLoading, suggestedUsers }
}

export default useGetSuggestedUsers