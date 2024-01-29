import useLogout from '../../../../hooks/useLogout'

import { Button, Flex, Tooltip } from '@chakra-ui/react'
import { BiLogOut } from 'react-icons/bi'

const Logout = () => {
    const { handleLogout, loading } = useLogout();

    return (
        <Tooltip
            hasArrow
            label={'Log out'}
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', lg: 'none' }}
        >
            <Flex
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                mt={'auto'}
                color='rgb(245, 245, 245)'
                onClick={handleLogout}
            >
                <BiLogOut size={24} />
                <Button
                    variant='ghost'
                    _hover={{ background: 'transparent' }}
                    isLoading={loading}
                    display={{ base: 'none', lg: 'block' }}
                >
                    Log Out
                </Button>
            </Flex>
        </Tooltip>
    )
}

export default Logout