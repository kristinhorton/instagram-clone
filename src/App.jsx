import { Routes, Route, Navigate } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import { ProfilePage } from "./ProfilePage/ProfilePage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"


function App() {
  const [authUser] = useAuthState(auth)

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
        <Route path='/auth' element={authUser ? <Navigate to='/' /> : <AuthPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
