import useAuthStore from '../../store/authStore'
import { useLocation } from 'react-router-dom'

//components
import { Avatar, Button, Flex, VStack, Text } from '@chakra-ui/react'

export const ProfileHeader = () => {
    const authUser = useAuthStore((state) => state.user)
    const { pathname } = useLocation()
    const canEditProfile = pathname === `/${authUser.username}`

    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            ps={10}
            direction={{ base: 'column', sm: 'row' }}
        >

            <Avatar
                name={authUser.fullname}
                alt={`${authUser.username} avatar`}
                src={authUser.profilePictureHeader}
                size={{ base: 'xl', md: '2xl' }}
                showBorder={true}
                justifySelf='center'
                alignSelf='flex-start'
                mx='auto'
            />

            <VStack
                alignItems='start'
                gap={2}
                mx='auto'
                flex={1}
            >
                <Flex
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                    alignItems='center'
                    w='full'
                >
                    <Text fontSize={{ base: 'sm', md: 'lg' }}>{authUser.username}</Text>
                    {canEditProfile ?
                        <Flex gap={4} alignItems='center' justifyContent='center'>
                            <Button
                                color='#F5F5F5'
                                bg='#363636'
                                _hover={{ bg: 'whiteAlhpa.800' }}
                                size={{ base: 'xs', md: 'sm' }}
                            >
                                Edit Profile
                            </Button>
                        </Flex>
                        : null
                    }

                </Flex>

                <Flex
                    alignItems='center'
                    gap={{ base: 2, sm: 4 }}
                    fontSize={{ base: 'xs', md: 'sm' }}
                >
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>{authUser.posts}</Text>
                        Posts
                    </Text>
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>{authUser.folloers}</Text>
                        Followers
                    </Text>
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>{authUser.following}</Text>
                        Following
                    </Text>
                </Flex>

                <Flex alignItems='center' gap={4}>
                    <Text fontSize='sm' fontWeight='bold'>
                        {authUser.fullname}
                    </Text>
                </Flex>
                <Text fontSize='sm'>{authUser.bio}</Text>
            </VStack>
        </Flex>
    )
}
