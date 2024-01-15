import { auth, db } from '../firebase/firebase'
import useShowToast from './useShowToast'
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useGoogleAuth = () => {
    //id to automatically add myself to every new user's followers/following
    const appOwnerId = 'kkEQ0DUHI3hOjTlCdq0Aek4HYKp2'
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(
        auth
    );
    const loginUser = useAuthStore((state) => state.login)
    const showToast = useShowToast()

    const handleGoogleAuth = async () => {
        try {
            const newUser = await signInWithGoogle()
            if (!newUser && error) {
                showToast('Error', error.message), 'error'
                return
            }

            //grab a snapshot of the user if they already exist
            const userRef = doc(db, 'users', newUser.user.uid)
            const userSnap = await getDoc(userRef)

            if (userSnap) {
                //log in existing user
                const userDoc = userSnap.data()
                localStorage.setItem('user-info', JSON.stringify(userDoc))
                loginUser(userDoc)
            }
            else {
                //sign up new user
                const userDoc = {
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    username: newUser.user.email.split('@')[0],
                    fullname: newUser.user.displayName,
                    bio: '',
                    profilePictureURL: '',
                    followers: [appOwnerId],
                    following: [appOwnerId],
                    posts: [],
                    createdAt: Date.now()
                }
                //add new user to firestore db
                await setDoc(doc(db, "users", newUser.user.uid), userDoc);
                //add new user to localStorage
                localStorage.setItem('user-info', JSON.stringify(userDoc))
                loginUser(userDoc)
            }

        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }

    return {
        loading,
        error,
        handleGoogleAuth
    }
}

export default useGoogleAuth