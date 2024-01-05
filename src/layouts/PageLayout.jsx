import React from 'react'
import { useLocation } from 'react-router-dom'

//components
import { Flex, Box } from '@chakra-ui/react'
import {Sidebar} from '../components/Sidebar/Sidebar'

export const PageLayout = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <Flex bg='black'>
            {/* Left side bar */}
            {pathname !== '/auth' ?
                <Box w={{ base: "70px", lg: "240px" }}>
                    <Sidebar />
                </Box>
                :
                null
            }

            {/* Right page content */}
            <Box flex={1} w={{ base: 'calc(100%-70px)', lg: 'calc(100%-240px' }}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout