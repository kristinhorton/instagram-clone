import { timeElapsed } from '../../utilities/timeEsapsed'
import useFollowAndUnfollowUser from '../../hooks/useFollowAndUnfollowUser'

import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const FeedPostHeader = ({ post, userProfile }) => {
    const { isFollowing, isUpdating, handleFollowAndUnfollow } = useFollowAndUnfollowUser(userProfile?.uid)
    const formatCreatedAt = timeElapsed(post?.createdAt)

    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            w='full'
            my={2}
            fontSize={12}
        >
            <HStack gap={2}>
                <Link
                    to={`${userProfile?.username}`}
                    cursor='pointer'
                >
                    <Avatar src={userProfile?.profilePictureURL} size='sm' name={userProfile?.fullName} />
                </Link>
                <Flex
                    alignItems='center'
                    gap={1}
                >
                    <Link
                        to={`${userProfile?.username}`}
                        cursor='pointer'

                    >
                        <Box fontWeight='bold' color='white'>{userProfile?.username}</Box>
                    </Link>
                    <Box color='whiteAlpha.700'>{`• ${formatCreatedAt}`}</Box>
                </Flex>
            </HStack>
            <Box cursor='pointer'>
                <Button
                    size='xs'
                    background='transparent'
                    fontSize={12}
                    fontWeight='bold'
                    color='blue.400'
                    variant='ghost'
                    _hover={{ background: 'transparent' }}
                    p={0}
                    onClick={handleFollowAndUnfollow}
                    isLoading={isUpdating}
                >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
            </Box>
        </Flex>
    )
}

export default FeedPostHeader