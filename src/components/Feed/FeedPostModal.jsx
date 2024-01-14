import { Box, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import PostFooter from '../Profile/PostFooter'
import PostComments from '../Comments/PostComments'

import useAuthStore from '../../store/authStore'
import FeedPostModalHeader from './FeedPostModalHeader'

const FeedPostModal = ({ isOpen, onClose, userProfile, post }) => {
    const authUser = useAuthStore((state) => state.user)

    return (
        <>
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
                    >
                        <Flex
                            gap={4}
                            w={{ base: '90%', sm: '70%', md: 'full' }}
                            mx='auto'
                            paddingInline={3}
                            minH='50vh'
                            maxH='90vh'
                        >
                            <Box
                                borderRadius={4}
                                overflow='hidden'
                                boxSize='fit-content'
                                alignItems='center'
                                justifyContent='center'

                            >
                                <Image
                                    src={post?.imageURL}
                                    objectFit='cover'
                                    w='600px'
                                    h='600px'
                                />
                            </Box>
                            <Flex
                                flex={1}
                                flexDir='column'
                                mx={0}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <FeedPostModalHeader userProfile={userProfile} />
                                <Divider bg='gray.500' />

                                {(post?.caption || post?.comments) && (
                                    <PostComments
                                        post={post}
                                        userProfile={userProfile}
                                    />
                                )}
                                <PostFooter
                                    post={post}
                                    authUser={authUser}
                                />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FeedPostModal