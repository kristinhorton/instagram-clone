import useAuthStore from '../../store/authStore'
import useUserProfileStore from '../../store/userProfileStore'
import useFollowAndUnfollowUser from '../../hooks/useFollowAndUnfollowUser'

import { Avatar, Button, Flex, VStack, Text, useDisclosure } from '@chakra-ui/react'
import EditProfile from './EditProfile'

export const ProfileHeader = () => {
    const { isLoading, userProfile } = useUserProfileStore()
    const { isFollowing, isUpdating, handleFollowAndUnfollow } = useFollowAndUnfollowUser(userProfile?.uid)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const authUser = useAuthStore(state => state.user)
    const canEditProfile = (authUser && (authUser.username === userProfile.username))
    const idToFollowOrUnfollow = userProfile.uid


    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            ps={10}
            direction={{ base: 'column', sm: 'row' }}
        >

            <Avatar
                name={userProfile.fullname}
                alt={`${userProfile.username} avatar`}
                src={userProfile.profilePictureURL}
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
                    <Text fontSize={{ base: 'sm', md: 'lg' }}>{userProfile.username}</Text>
                    {canEditProfile &&
                        <Flex gap={4} alignItems='center' justifyContent='center'>
                            <Button
                                color='#F5F5F5'
                                bg='#363636'
                                _hover={{ bg: 'whiteAlhpa.800' }}
                                size={{ base: 'xs', md: 'sm' }}
                                onClick={onOpen}
                            >
                                Edit Profile
                            </Button>
                        </Flex>
                    }
                    {!canEditProfile &&
                        <Flex gap={4} alignItems='center' justifyContent='center'>
                            <Button
                                color='white'
                                bg='blue.500'
                                size={{ base: 'xs', md: 'sm' }}
                                isLoading={isUpdating}
                                onClick={handleFollowAndUnfollow}
                            >
                                {isFollowing ? 'Unfollow' : 'Follow'}
                            </Button>
                        </Flex>
                    }
                </Flex>

                <Flex
                    alignItems='center'
                    gap={{ base: 2, sm: 4 }}
                    fontSize={{ base: 'xs', md: 'sm' }}
                >
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>{userProfile.posts.length}</Text>
                        Posts
                    </Text>
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>{userProfile.followers.length}</Text>
                        Followers
                    </Text>
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>{userProfile.following.length}</Text>
                        Following
                    </Text>
                </Flex>

                <Flex alignItems='center' gap={4}>
                    <Text fontSize='sm' fontWeight='bold'>
                        {userProfile.fullname}
                    </Text>
                </Flex>
                <Text fontSize='sm'>{userProfile.bio}</Text>
            </VStack>
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
        </Flex>
    )
}
