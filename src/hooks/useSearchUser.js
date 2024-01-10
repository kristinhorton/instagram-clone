import { useState } from 'react'
import useShowToast from './useShowToast'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useSearchUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchUser, setSearchUser] = useState()
    const [searchError, setSearchError] = useState(null)
    const showToast = useShowToast()

    const getSearchUser = async (username) => {
        setIsLoading(true)
        try {
            const q = query(collection(db, 'users'), where('username', '==', username));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setSearchError(new Error('User Not Found'))
                setSearchUser(null)
                throw Error("User not found");
            }else{
                setSearchError(null)
            }

            querySnapshot.forEach((doc) => {
                setSearchUser(doc.data())
            });

        } catch (error) {
            showToast('Error', error.message, 'error')
            setSearchError(error)
            setSearchUser(null);
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        searchUser,
        searchError,
        getSearchUser
    }
}

export default useSearchUser