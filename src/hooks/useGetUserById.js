import { useEffect, useState } from 'react'
import useShowToast from './useShowToast'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useGetUserById = (userId) => {
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        /**
         * Gets user profile data given a user id 
         * @returns {Object} userProfile
         */
        const getUserById = async () => {
            setIsLoading(true)
            try {
                const userRef = await getDoc(doc(db, 'users', userId))
                if (userRef) {
                    setUserProfile(userRef.data())
                }
            } catch (error) {
                showToast("Error", error.message, "error")
            } finally {
                setIsLoading(false)
            }
        }

        if (userId) getUserById()

    }, [userId, setUserProfile, showToast])

    return { isLoading, userProfile, setUserProfile }
}

export default useGetUserById