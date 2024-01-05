import { Routes, Route } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import { ProfilePage } from "./ProfilePage/ProfilePage"


function App() {

  return (
    <>
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  )
}

export default App
