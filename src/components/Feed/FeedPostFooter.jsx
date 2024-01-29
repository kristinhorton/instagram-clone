import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import PropTypes from 'prop-types'
import { useRef, useState } from 'react';
import useCreatePostComment from '../../hooks/useCreatePostComment';
import useLikeandUnlikePost from '../../hooks/useLikeandUnlikePost';
import PostModal from '../Modals/PostModal/PostModal';
import FeedPostCaption from './FeedPostCaption';

import '../../styles/Feed/FeedPostFooter.css'


const FeedPostFooter = ({ post, userProfile }) => {
  const [comment, setComment] = useState('')
  const { isCommenting, handlePostComment } = useCreatePostComment()
  const commentRef = useRef(null)
  const numComments = post?.comments?.length
  const { isLiked, likes, handleLikeAndUnlike, isLoading } = useLikeandUnlikePost(post)
  const feedPostModal = useDisclosure()

  const handleSubmitComment = () => {
    handlePostComment(post.id, comment)
    setComment('')
  }

  return (
    <>
      <Flex className='footer-flex'>
        <Box
          onClick={handleLikeAndUnlike}
          className='like-button-box'
        >
          {isLiked ? <FaHeart className='liked-icon' /> : <FaRegHeart className='unliked-icon' />}
        </Box>
        <Box
          className='comment-button-box'
          onClick={() => commentRef.current.focus()}
        >
          <FaRegComment size={18} />
        </Box>
      </Flex>

      <Text className='likes-total'>
        {likes > 0 ? `${likes} likes` : null}
      </Text>
      <Box className='caption-box'>
        <FeedPostCaption
          username={userProfile?.username}
          caption={post?.caption}
        />
      </Box>
      <Text
        className='comments-total'
        onClick={feedPostModal.onOpen}
      >
        {numComments > 0 && `View all ${numComments} comments`}
      </Text>

      <Flex className='comment-input-flex'>
        <InputGroup>
          <Input
            className='comment-input'
            variant='flushed'
            size='sm'
            placeholder='Add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            ref={commentRef}
          />
          {comment && (
            <InputRightElement>
              <Button
                size='xs'
                variant='ghost'
                color='blue.500'
                className='submit-comment-button'
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </Flex>

      <PostModal
        userProfile={userProfile}
        post={post}
        isOpen={feedPostModal.isOpen}
        onClose={feedPostModal.onClose}
      />
    </>
  )
}

export default FeedPostFooter

FeedPostFooter.proptypes = {
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