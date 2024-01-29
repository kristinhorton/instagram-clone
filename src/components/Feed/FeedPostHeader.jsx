import { timeElapsed } from '../../utilities/timeEsapsed'
import useFollowAndUnfollowUser from '../../hooks/useFollowAndUnfollowUser'
import PropTypes from 'prop-types'

import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../../styles/Feed/FeedPostHeader.css'

const FeedPostHeader = ({ createdAt, userId, userName, fullName, profilePictureURL }) => {
    const { isFollowing, isUpdating, handleFollowAndUnfollow } = useFollowAndUnfollowUser(userId)
    const formatCreatedAt = timeElapsed(createdAt)

    return (
        <Flex className='header-flex'>
            <HStack gap={2}>
                <Link to={`${userName}`} className='link'>
                    <Avatar src={profilePictureURL} size='sm' name={fullName} />
                </Link>
                <Flex className='username-flex'>
                    <Link to={`${userName}`} className='link'>
                        <Box className='username-text'>{userName}</Box>
                    </Link>
                    <Box className='createdAt-text'>{`• ${formatCreatedAt}`}</Box>
                </Flex>
            </HStack>
            <Box>
                <Button
                    size='xs'
                    background='transparent'
                    variant='ghost'
                    className='follow-button'
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

FeedPostHeader.proptypes = {
    createdAt: PropTypes.number.isRequired,
    fullName: PropTypes.string,
    profilePictureURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired
}