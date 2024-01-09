import { Link as RouterLink } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuthStore from "../../store/authStore"

//components
import { Avatar, Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, LikeLogo, SearchLogo } from '../../assets/constants'
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'

export const Sidebar = () => {
    const authUser = useAuthStore((state) => state.user)

    const items = [
        {
            icon: <AiFillHome size={24} />,
            text: 'Home',
            link: '/'
        },
        {
            icon: <SearchLogo />,
            text: 'Search',
        },
        {
            icon: <LikeLogo />,
            text: 'Notifcations',
        },
        {
            icon: <CreatePostLogo />,
            text: 'Create',
        },
        {
            icon: <Avatar size={'sm'} name={authUser?.fullname} src={authUser?.profilePictureURL} />,
            text: 'Profile',
            link: `/${authUser?.username}`
        }
    ]

    const { handleLogout, loading } = useLogout();

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
                <Link
                    to={'/'}
                    as={RouterLink}
                    pl={2}
                    display={{ base: 'none', lg: 'block' }}
                    cursor={'pointer'}
                >
                    <InstagramLogo />
                </Link>
                <Link
                    to={'/'}
                    as={RouterLink}
                    p={2}
                    display={{ base: 'block', lg: 'none' }}
                    cursor={'pointer'}
                    borderRadius={6}
                    _hover={{
                        bg: 'whiteAlpha.200'
                    }}
                    w={10}
                >
                    <InstagramMobileLogo />
                </Link>
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    {items.map((item, index) => (
                        <Tooltip
                            key={index}
                            hasArrow
                            label={item.text}
                            placement={'right'}
                            ml={1}
                            openDelay={500}
                            display={{ base: 'block', lg: 'none' }}
                        >
                            <Link
                                display={'flex'}
                                to={item.link ? item.link : null}
                                as={RouterLink}
                                alignItems={'center'}
                                gap={4}
                                _hover={{ bg: 'whiteAlpha.400' }}
                                borderRadius={6}
                                p={2}
                                w={{ base: 10, md: 'full' }}
                                justifyContent={{ base: 'center', md: 'flex-start' }}
                                color='rgb(245, 245, 245)'
                            >
                                {item.icon}
                                <Box display={{ base: 'none', lg: 'block' }}>
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
                <Tooltip
                    hasArrow
                    label={'log out'}
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
            </Flex>
        </Box>
    )
}

export default Sidebar