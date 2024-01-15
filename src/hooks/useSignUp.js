import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase/firebase'
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore"
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'


export const useSignUp = () => {
    const appOwnerId = 'kkEQ0DUHI3hOjTlCdq0Aek4HYKp2'
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast()
    const loginUser = useAuthStore(state => state.login)

    const signup = async (inputs) => {

        //check if username already exists
        const userNameRef = collection(db, "users");
        const userNameQuery = query(userNameRef, where("username", "==", inputs.username));
        const querySnapshot = await getDocs(userNameQuery)

        try {
            //if required fields are not filled in
            if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
                throw new Error('Please fill in all required fields')
            }
            //if username already exists
            if (!querySnapshot.empty) {
                throw new Error('Username already exists')
            }

            //create a new user
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            //if new user is not created
            if (!newUser && error) {
                throw new Error(error.message)
            }
            //if new user is created
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
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
            showToast("Error", error.message, "error")
        }
    }

    return {
        loading,
        error,
        signup
    }
}
