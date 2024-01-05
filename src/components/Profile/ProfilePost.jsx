import React, { useState } from 'react'

//components
import { Box, GridItem, Image, Text, Flex, useDisclosure, Avatar, Divider, VStack } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'

import { Comment } from './Comment'
import { comments } from '../../assets/comments.json'
import { PostFooter } from './PostFooter'

export const ProfilePost = ({ post }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [postComments, setPostComments] = useState(comments)

    return (
        <>
            <GridItem
                cursor='pointer'
                overflow='hidden'
                border='ipx solid'
                borderColor='whiteAlpha.300'
                position='relative'
                aspectRatio={1 / 1}
                onClick={onOpen}
                maxW={350}
                maxH={350}
            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position='absolute'
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    bg={'blackAlpha.700'}
                    transition='all 0.3s ease'
                    zIndex={1}
                    justifyContent='center'
                >
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap={30}
                    >
                        <Flex>
                            <AiFillHeart size={20} />
                            <Text fontWeight='bold' ml={2}>7</Text>
                        </Flex>
                        <Flex>
                            <FaComment size={20} />
                            <Text fontWeight='bold' ml={2}>3</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image
                    src={post.src}
                    alt='profile post'
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    _hover={{ opacity: 0.3 }}
                />
            </GridItem>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered={true}
                size={{ base: '3xl', md: '5xl' }}

            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody
                        bg='black'
                        pb={5}
                        m={0}
                        paddingInline={3}
                    >
                        <Flex
                            gap={4}
                            w={{ base: '90%', sm: '70%', md: 'full' }}
                            mx='auto'
                        >
                            <Box
                                borderRadius={4}
                                overflow='hidden'
                                border='1px solid'
                                borderColor='whiteAlpha.300'
                            >
                                <Image
                                    src={post.src}
                                    maxW={650}
                                    maxH={850}
                                />
                            </Box>
                            <Flex
                                flex={1}
                                flexDir='column'
                                mx={0}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <Flex alignItems='center' justifyContent='space-between'>
                                    <Flex alignItems='center' gap={4}>
                                        <Avatar
                                            name='Kristin Horton'
                                            alt='kristinhorton avatar'
                                            src='src/public/JPO02037_Original.jpg'
                                        />
                                        <Text fontWeight='bold' fontSize={12}>kristinhorton</Text>
                                    </Flex>
                                    <Box
                                        _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }}
                                        borderRadius={4}
                                        p={1}
                                        marginRight={5}
                                    >
                                        <MdDeleteOutline size={20} cursor='pointer' />
                                    </Box>
                                </Flex>
                                <Divider bg='gray.500' />

                                <VStack
                                    w='full'
                                    h='full'
                                    maxH='630px'
                                    alignItems='start'
                                    overflowY='auto'>
                                    {postComments.map((com, index) => (
                                        <Comment
                                            key={`comment-${index}`}
                                            createdAt={com.createdAt}
                                            username={com.username}
                                            avatar={com.avatar}
                                            text={com.text}
                                        />
                                    ))
                                    }
                                </VStack>
                                <PostFooter
                                    numLikes={7}
                                    caption={'This is a caption'}
                                    username='kristinhorton'
                                />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
