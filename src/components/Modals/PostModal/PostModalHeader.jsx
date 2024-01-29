import { timeElapsed } from '../../../utilities/timeEsapsed'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useDeletePost from '../../../hooks/useDeletePost'
import useFollowAndUnfollowUser from '../../../hooks/useFollowAndUnfollowUser'
import { useEffect, useState } from 'react'

import { Avatar, Box, Button, Flex, HStack, Tooltip, useDisclosure } from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
import ConfirmDeleteModal from '../DeleteModal/ConfirmDeleteModal';
import '../../../styles/Modals/PostModal/PostModalHeader.css'


const PostModalHeader = ({ post, userId, userName, fullName, profilePictureURL, userOwnsPost }) => {
    const formatCreatedAt = timeElapsed(post?.createdAt)
    const { isDeleting, handleDeletePost } = useDeletePost()
    const { isFollowing, isUpdating, handleFollowAndUnfollow } = useFollowAndUnfollowUser(userId)
    const deleteModal = useDisclosure()
    const [confirmDeleteResult, setConfirmDeleteResult] = useState(null)

    //hook will execute when the value of confirmDeleteResult changes
    //a true value will execute the post delete
    useEffect(() => {
        deleteModal.onClose()

        if (confirmDeleteResult) {
            handleDeletePost(post)
        }
    }, [confirmDeleteResult])

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
            <Flex>
                {userOwnsPost && (
                    <Tooltip
                        hasArrow
                        label='Delete'
                        placement='bottom'
                        ml={1}
                        openDelay={500}
                    >
                        <Button
                            _hover={{ color: 'red' }}
                            variant='ghost'
                            p={1}
                            marginRight={5}
                            onClick={deleteModal.onOpen}
                            isLoading={isDeleting}
                            disabled={isDeleting}
                        >
                            <MdDeleteOutline size={20} cursor='pointer' />
                        </Button>
                    </Tooltip>
                )}
                {!userOwnsPost && (
                    <Button
                        size='xs'
                        p={1}
                        marginRight={5}
                        background='transparent'
                        variant='ghost'
                        className='follow-button'
                        onClick={handleFollowAndUnfollow}
                        isLoading={isUpdating}
                    >
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </Button>
                )}
            </Flex>
            {userOwnsPost && (
                <ConfirmDeleteModal
                    isOpen={deleteModal.isOpen}
                    onClose={deleteModal.onClose}
                    setConfirmDeleteResult={setConfirmDeleteResult}
                />
            )}
        </Flex>
    )
}

export default PostModalHeader

PostModalHeader.proptypes = {
    createdAt: PropTypes.number.isRequired,
    fullName: PropTypes.string,
    profilePictureURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired
}