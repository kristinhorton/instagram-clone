import { Avatar, Box, Button, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, Tooltip, VStack, useDisclosure } from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import PostFooter from './PostFooter'
import PostComments from '../Comments/PostComments'

import useAuthStore from '../../store/authStore'
import { useEffect, useState } from 'react'
import useDeletePost from '../../hooks/useDeletePost'

const ProfilePostModal = ({ isOpen, onClose, userProfile, post }) => {
    const authUser = useAuthStore((state) => state.user)
    const userCanDelete = authUser ? userProfile.uid === authUser.uid : false
    const [confirmDeleteResult, setConfirmDeleteResult] = useState(false)
    const deleteModal = useDisclosure()
    const { isDeleting, handleDeletePost } = useDeletePost()
    const postHasCaptionOrComments = post?.caption || post?.comments

    //hook will execute when the value of confirmDeleteResult changes
    //a true value will execute the post delete
    useEffect(() => {
        deleteModal.onClose()

        if (confirmDeleteResult) {
            handleDeletePost(post)
        }
    }, [confirmDeleteResult])

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
                                    w='500px'
                                    h='500px'
                                />
                            </Box>
                            <Flex
                                flex={1}
                                flexDir='column'
                                mx={0}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <Flex alignItems='center' justifyContent='space-between' mb={2}>
                                    <Flex alignItems='center' gap={4}>
                                        <Avatar
                                            name={userProfile?.fullname}
                                            alt={userProfile?.fullname}
                                            src={userProfile?.profilePictureURL}
                                            size='sm'
                                        />
                                        <Text fontWeight='bold' fontSize={12}>{userProfile?.username}</Text>
                                    </Flex>
                                    {userCanDelete && (
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
                                </Flex>
                                <Divider bg='gray.500' />

                                {postHasCaptionOrComments && (
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

            <ConfirmDeleteModal
                isOpen={deleteModal.isOpen}
                onClose={deleteModal.onClose}
                setConfirmDeleteResult={setConfirmDeleteResult}
            />
        </>
    )
}

export default ProfilePostModal