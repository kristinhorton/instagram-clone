import useFollowAndUnfollowUser from '../../hooks/useFollowAndUnfollowUser'
import useAuthStore from '../../store/authStore'

import { Avatar, Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"

const SuggestedUser = ({ user, setUser }) => {
    const authUser = useAuthStore(state => state.user)
    const {
        isFollowing,
        isUpdating,
        handleFollowAndUnfollow
    } = useFollowAndUnfollowUser(user?.uid)

    const handleFollowOrUnfollow = async () => {
        await handleFollowAndUnfollow()
        setUser({
            ...user,
            followers: isFollowing
                ? user.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...user.followers, authUser]
        })
    }

    return (
        <Flex justifyContent='space-between' alignItems='center' w='full'>
            <HStack gap={2}>
                <Avatar src={user?.profilePictureURL} name={user?.fullname} size='md' />
                <VStack spacing={0} alignItems='flex-start' justifyContent='flex-start'>
                    <Box
                        fontSize={14}
                        fontWeight='bold'
                    >
                        {user?.fullname}
                    </Box>
                    <Box
                        fontSize={14}
                        color='gray.500'
                    >
                        {user?.username}
                    </Box>
                </VStack>
            </HStack>
            {authUser.uid !== user.uid &&
                <Button
                    fontSize={14}
                    fontWeight='bold'
                    color='blue.400'
                    variant='ghost'
                    _hover={{ color: 'gray.400' }}
                    p={0}
                    onClick={handleFollowOrUnfollow}
                    isLoading={isUpdating}
                >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
            }
        </Flex>
    )
}

export default SuggestedUser
