import { Box, Button, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, VStack } from '@chakra-ui/react'
import { FaImage } from "react-icons/fa6";

import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePreviewImage from '../../hooks/usePreviewImage';
import useCreatePost from '../../hooks/useCreatePost';


const CreatePostModal = ({ isOpen, onClose }) => {
    const [caption, setCaption] = useState('')
    const imageRef = useRef(null)
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImage();
    const { pathname } = useLocation()
    const { isLoading, handleCreatePost } = useCreatePost()

    const handleCaptionChange = ({ target }) => {
        setCaption(target.value)
    }

    const handleModalClose = () => {
        setSelectedFile(null)
        setCaption('')
        onClose()
    }

    const submitNewPostRequest = () => {
        handleCreatePost(caption, selectedFile, pathname)
        handleModalClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={handleModalClose} size='xl'>
            <ModalOverlay />
            <ModalContent bg={'black'} border={'1px solid gray'}>
                <ModalHeader pb={1}>Create Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    {!selectedFile && (
                        <Flex mt={5}
                            h="468px"
                            alignItems='center'
                            justifyContent='center'>
                            <VStack
                                gap={2}
                                direction='column'
                                spacing={3}
                            >
                                <FaImage size={100} />
                                <Button
                                    w='full'
                                    colorScheme='blue'
                                    cursor='pointer'
                                    onClick={() => imageRef.current.click()}>
                                    Select From Computer
                                </Button>
                            </VStack>
                            <Input
                                type='file'
                                accept='image/x-png,image/jpeg'
                                hidden
                                ref={imageRef}
                                onChange={handleImageChange} />
                        </Flex>
                    )}

                    {selectedFile && (
                        <Flex mt={5} width='full' position='relative' justifyContent='center'>
                            <VStack gap={2} direction='column' spacing='30px'>
                                <Box boxSize={'fit-content'}>
                                    <Image
                                        src={selectedFile}
                                        alt='selected img'
                                        objectFit='cover'
                                        w="500px"
                                        h="500px"
                                    />
                                </Box>
                                <Box w='full'>
                                    <Textarea
                                        resize='none'
                                        placeholder='Post caption...'
                                        position={'relative'}
                                        onChange={handleCaptionChange}
                                    />
                                </Box>
                            </VStack>
                        </Flex>
                    )}
                </ModalBody>
                <ModalFooter>
                    {selectedFile && (
                        <>
                            <Button
                                mr={3}
                                onClick={() => setSelectedFile(null)}
                                disabled={isLoading}
                            >
                                Select New Image
                            </Button>
                            <Button
                                mr={3}
                                colorScheme='blue'
                                onClick={submitNewPostRequest}
                                isLoading={isLoading}
                                disabled={isLoading}
                            >
                                Post
                            </Button>
                        </>
                    )}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CreatePostModal