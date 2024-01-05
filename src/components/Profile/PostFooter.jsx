import React, { useState } from 'react'

//components
import { Box, Button, Divider, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";


export const PostFooter = ({ numLikes, caption, username }) => {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(numLikes || 0)
    const [newCommentValue, setNewCommentValue] = useState('')

    const handleLike = () => {
        if (liked) {
            setLiked(false)
            setLikes(likes - 1)
        }
        else {
            setLiked(true)
            setLikes(likes + 1)
        }
    }

    const handleCommentInputChange = (e) => {
        setNewCommentValue(e.target.value)
    }

    return (
        <Box mb={0} marginTop='auto'>
            <Divider bg='gray.500' />
            <Flex
                alignItems={'center'}
                fontSize={12}
                gap={4}
                w={'full'}
                pt={0}
                mb={2}
                mt={4}
            >
                <Box
                    onClick={handleLike}
                    cursor={'pointer'}
                >
                    {liked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
                </Box>
                <Box cursor={'pointer'} fontSize={16}>
                    <FaRegComment size={18} />
                </Box>
            </Flex>

            <Text fontWeight={'bold'} fontSize={12} cursor={'pointer'}>
                {likes > 0 ? `${likes} likes` : null}
            </Text>
            <Box fontSize={12} mt={1} mb={1}>
                <Text as={'span'} fontWeight={'bold'}>
                    {username}
                </Text>
                <Text as={'span'}>
                    {` ${caption}`}
                </Text>
            </Box>

            <Flex
                alignItems={'center'}
                gap={2}
                w={'full'}
                mb={4}
            >
                <InputGroup>
                    <Input
                        variant='flushed'
                        size='sm'
                        placeholder='Add a comment...'
                        fontSize={12}
                        value={newCommentValue || ''}
                        onChange={handleCommentInputChange}
                    />
                    {newCommentValue ?
                        <InputRightElement>
                            <Button
                                size='xs'
                                variant='ghost'
                                color='blue.500'
                                fontWeight={600}
                                cursor='pointer'
                                _hover={{ color: 'white' }}
                            >
                                Post
                            </Button>
                        </InputRightElement>
                        : null}
                </InputGroup>
            </Flex>
        </Box>
    )
}
