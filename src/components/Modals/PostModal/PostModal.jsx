import PropTypes from 'prop-types'
import useAuthStore from '../../../store/authStore'
import useLikeandUnlikePost from '../../../hooks/useLikeandUnlikePost';
import useCreatePostComment from '../../../hooks/useCreatePostComment';

import { Box, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import PostFooter from '../../Profile/PostFooter'
import PostComments from './PostModalComments'
import PostModalHeader from './PostModalHeader'
import '../../../styles/Modals/PostModal/PostModal.css'

const PostModal = ({ isOpen, onClose, userProfile, post }) => {
    const authUser = useAuthStore((state) => state.user)
    const userIsAuthenticated = authUser ? true : false
    const userOwnsPost = authUser ? userProfile.uid === authUser.uid : false
    const postHasCaptionOrComments = post?.caption || post?.comments

    const { isLiked, likes, handleLikeAndUnlike, isLoading } = useLikeandUnlikePost(post)
    const { isCommenting, handlePostComment } = useCreatePostComment()


    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered={true}
                size={{ base: '3xl', md: '6xl' }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody className='modal-body'>
                        <Flex
                            w={{ base: '90%', sm: '70%', md: 'full' }}
                            className='modal-body-flex'
                        >
                            <Box className='image-box'>
                                <Image className='image' src={post?.imageURL} />
                            </Box>
                            <Flex
                                className='modal-right-content-flex'
                                flex={1}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <PostModalHeader
                                    userId={userProfile?.uid}
                                    userName={userProfile?.username}
                                    fullName={userProfile?.fullname}
                                    profilePictureURL={userProfile?.profilePictureURL}
                                    userOwnsPost={userOwnsPost}
                                    post={post}

                                />
                                <Divider className='divider' />

                                {postHasCaptionOrComments && (
                                    <PostComments
                                        createdAt={post?.createdAt}
                                        caption={post?.caption}
                                        comments={post?.comments}
                                        userName={userProfile?.username}
                                        fullName={userProfile?.fullname}
                                        profilePictureURL={userProfile?.profilePictureURL}
                                    />
                                )}
                                <Divider className='divider' />
                                <PostFooter
                                    postId={post?.id}
                                    createdAt={post?.createdAt}
                                    userIsAuthenticated={userIsAuthenticated}
                                    isLiked={isLiked}
                                    likes={likes}
                                    isLoading={isLoading}
                                    isCommenting={isCommenting}
                                    handleLikeAndUnlike={handleLikeAndUnlike}
                                    handlePostComment={handlePostComment}
                                />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PostModal

PostModal.proptypes = {
    isOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,

    post: PropTypes.shape({
        caption: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            createdAt: PropTypes.number.isRequired,
            createdBy: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            postId: PropTypes.string.isRequired
        })),
        createdAt: PropTypes.number.isRequired,
        createdBy: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        likes: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,

    userProfile: PropTypes.shape({
        bio: PropTypes.string,
        createdAt: PropTypes.number,
        email: PropTypes.string,
        followers: PropTypes.arrayOf(PropTypes.string),
        following: PropTypes.arrayOf(PropTypes.string),
        fullname: PropTypes.string,
        posts: PropTypes.arrayOf(PropTypes.string),
        profilePictureURL: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}