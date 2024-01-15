import { useState } from 'react'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { db, storage } from '../firebase/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import useUserProfileStore from '../store/userProfileStore'

const useEditProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const authUser = useAuthStore(state => state.user)
    const setAuthUser = useAuthStore((state) => state.setUser)
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile)
    const showToast = useShowToast()

    const editProfile = async (inputs, selectedFile) => {
        if (isLoading || !authUser) return
        setIsLoading(true)

        const storageRef = ref(storage, `profilePictures/${authUser?.uid}`)
        const userDocRef = doc(db, 'users', authUser?.uid)

        let URL = ''
        try {
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, 'data_url')
                URL = await getDownloadURL(ref(storage, `profilePictures/${authUser?.uid}`))
            }

            const updatedUser = {
                ...authUser,
                fullname: inputs?.fullname || authUser?.fullname,
                bio: encodeURI(inputs?.bio) || authUser?.bio,
                profilePictureURL: URL || authUser?.profilePictureURL
            }

            //update user in firebase
            await updateDoc(userDocRef, updatedUser)
            //update user in local storage
            localStorage.setItem('user-info', JSON.stringify(updatedUser))
            //update user in auth store
            setAuthUser(updatedUser)
            //update user in user profile store
            setUserProfile(updatedUser)

            showToast('Success', 'Profile Updated Successfully', 'success')

        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }
    return {
        isLoading,
        editProfile
    }
}

export default useEditProfile