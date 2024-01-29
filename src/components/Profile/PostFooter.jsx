import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';

import PropTypes from 'prop-types'
import { useRef, useState } from 'react';
import { timeElapsed } from '../../utilities/timeEsapsed';


const ProfilePostFooter = ({ postId, createdAt, userIsAuthenticated, isLiked, likes, isLoading, isCommenting, handleLikeAndUnlike, handlePostComment }) => {
    const formatCreatedAt = timeElapsed(createdAt, true)
    const [comment, setComment] = useState('')
    const commentRef = useRef(null)

    const handleSubmitComment = async () => {
        handlePostComment(postId, comment)
        setComment('')
    }

    return (
        <Box mb={0} marginTop='auto'>
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

            {userIsAuthenticated && (
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

export default ProfilePostFooter

ProfilePostFooter.prototypes = {
    userIsAuthenticated: PropTypes.bool.isRequired,
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
    }).isRequired
}