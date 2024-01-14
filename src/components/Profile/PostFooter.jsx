import { Box, Button, Divider, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import useCreatePostComment from '../../hooks/useCreatePostComment';
import useLikeandUnlikePost from '../../hooks/useLikeandUnlikePost';


const PostFooter = ({ post, authUser }) => {
    const [comment, setComment] = useState('')
    const { isCommenting, handlePostComment } = useCreatePostComment()
    const commentRef = useRef(null)

    const { isLiked, likes, handleLikeAndUnlike, isLoading } = useLikeandUnlikePost(post)

    const formatCreatedAt = new Date(post.createdAt).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })

    const handleSubmitComment = async () => {
        handlePostComment(post.id, comment)
        setComment('')
    }

    return (
        <Box mb={0} marginTop='auto'>
            <Divider bg='gray.500' />
            <Flex
                alignItems={'center'}
                gap={4}
                w={'full'}
                pt={0}
                mb={2}
                mt={2}
            >
                <Box
                    onClick={handleLikeAndUnlike}
                    cursor={'pointer'}
                >
                    {(isLiked && !isLoading) ? <FaHeart size={18} color='red' /> : <FaRegHeart size={18} />}
                </Box>
                <Box
                    cursor={'pointer'}
                    onClick={() => commentRef.current.focus()}>
                    <FaRegComment size={18} />
                </Box>
            </Flex>

            <Text fontWeight={'bold'} fontSize={12} cursor={'pointer'}>
                {likes == 1 && `${likes} like`}
                {likes > 1 && `${likes} likes`}
            </Text>
            <Box fontSize={12} mt={1} mb={1}>
                <Text as={'span'}>
                    {formatCreatedAt}
                </Text>
            </Box>

            {authUser && (
                <Flex
                    alignItems={'center'}
                    gap={2}
                    w={'full'}
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
                        {comment &&
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
                        }
                    </InputGroup>
                </Flex>
            )}

        </Box>
    )
}

export default PostFooter