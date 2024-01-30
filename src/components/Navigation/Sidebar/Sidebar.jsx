import { Box, Flex } from '@chakra-ui/react'
import SideBarLogo from './SidebarLogo'
import SidebarItems from './SidebarItems/SidebarItems'
import Logout from './SidebarItems/Logout'

export const Sidebar = () => {
    return (
        <Box
            h={'100vh'}
            borderRight={'1px solid'}
            color={'whiteAlpha.300'}
            py={8}
            position={'sticky'}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }}>

            <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
                <SideBarLogo />
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    <SidebarItems />
                </Flex>
                <Logout />
            </Flex>
        </Box>
    )
}

export default Sidebar