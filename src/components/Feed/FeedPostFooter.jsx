import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

import { useRef, useState } from 'react';
import useCreatePostComment from '../../hooks/useCreatePostComment';
import useLikeandUnlikePost from '../../hooks/useLikeandUnlikePost';
import FeedPostModal from './FeedPostModal';


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
      <Flex
        alignItems='center'
        fontSize={12}
        gap={4}
        w='full'
        pt={0}
        mb={2}
        mt={4}
      >
        <Box
          onClick={handleLikeAndUnlike}
          cursor='pointer'
          isLoading={isLoading}
        >
          {isLiked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
        </Box>
        <Box
          cursor='pointer'
          fontSize={16}
          onClick={() => commentRef.current.focus()}
        >
          <FaRegComment size={18} />
        </Box>
      </Flex>

      <Text fontWeight='bold' fontSize={12} cursor='pointer'>
        {likes > 0 ? `${likes} likes` : null}
      </Text>
      <Box fontSize={12} mt={1} mb={1}>
        <Text as='span' fontWeight='bold'>
          {post?.username}
        </Text>
        <Text as='span'>
          {` ${decodeURI(post?.caption)}`}
        </Text>
      </Box>
      <Text
        fontWeight='400'
        fontSize={12}
        color='whiteAlpha.700'
        cursor='pointer'
        onClick={feedPostModal.onOpen}
      >
        {numComments > 0 && `View all ${numComments} comments`}
      </Text>

      <Flex
        alignItems='center'
        gap={2}
        w='full'
        mb={4}
      >
        <InputGroup>
          <Input
            variant='flushed'
            size='sm'
            placeholder='Add a comment...'
            fontSize={12}
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
                fontWeight={600}
                cursor='pointer'
                _hover={{ color: 'white' }}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </Flex>

      <FeedPostModal
        userProfile={userProfile}
        post={post}
        isOpen={feedPostModal.isOpen}
        onClose={feedPostModal.onClose}
      />
    </>
  )
}

export default FeedPostFooter
