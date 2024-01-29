import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'

//components
import { Flex, Box, Spinner } from '@chakra-ui/react'
import { Sidebar } from '../components/Navigation/Sidebar/Sidebar'
import { Navbar } from '../components/Navigation/Navbar/Navbar'

export const PageLayout = ({ children }) => {
    const { pathname } = useLocation()
    const [user, loading] = useAuthState(auth);
    const renderSidebar = pathname !== '/auth' && user
    const renderNavBar = !user && !loading && pathname !== '/auth'
    const loadingAuthentication = !user && loading

    if (loadingAuthentication) return <PageLayoutSpinner />

    return (
        <Flex bg='black' direction={renderSidebar ? 'row' : 'column'}>
            {/* Only render side bar when user is logged in*/}
            {renderSidebar ?
                <Box w={{ base: "70px", lg: "240px" }}>
                    <Sidebar />
                </Box>
                :
                null
            }

            {renderNavBar ? <Navbar /> : null}

            {/* Right page content */}
            <Box
                flex={1}
                w={{ base: 'calc(100%-70px)', lg: 'calc(100%-240px' }}
                mx='auto'
            >
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout

const PageLayoutSpinner = () => {
    return (
        <Flex
            flexDir='column'
            h='100vh'
            alignItems='center'
            justifyContent='center'
        >
            <Spinner size='xl' />
        </Flex>
    )
}