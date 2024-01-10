import useAuthStore from "../../store/authStore"

import { Avatar, Box, Tooltip, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Profile = () => {
    const authUser = useAuthStore((state) => state.user)

    return (
        <Tooltip
            hasArrow
            label='Profile'
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', lg: 'none' }}
        >
            <Link
                display={'flex'}
                to={`/${authUser?.username}`}
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
                <Avatar
                    size={'sm'}
                    name={authUser?.fullname}
                    src={authUser?.profilePictureURL}
                />
                <Box display={{ base: 'none', lg: 'block' }}>
                    Profile
                </Box>
            </Link>
        </Tooltip>
    )
}

export default Profile