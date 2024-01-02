import { Routes, Route } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"


function App() {

  return (
    <>
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
      </PageLayout>
    </>
  )
}

export default App
