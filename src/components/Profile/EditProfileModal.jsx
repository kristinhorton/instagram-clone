'use client'

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Avatar,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
    Textarea,
} from '@chakra-ui/react'
import useAuthStore from '../../store/authStore';
import { useRef, useState } from 'react';
import useShowToast from '../../hooks/useShowToast';
import useEditProfile from '../../hooks/useEditProfile';
import usePreviewImage from '../../hooks/usePreviewImage';

export default function EditProfile({ isOpen, onClose }) {
    const authUser = useAuthStore((state) => state.user);
    const fileRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImage();
    const { isLoading, editProfile } = useEditProfile();
    const showToast = useShowToast();

    const [inputs, setInputs] = useState({
        fullname: authUser?.fullname,
        bio: decodeURI(authUser?.bio),
    });


    const handleEditProfile = async () => {
        try {
            await editProfile(inputs, selectedFile);
            setSelectedFile(null);
            onClose();
        } catch (error) {
            showToast('Error', error.message, 'error');
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='black' boxShadow='xl' border='1px solid gray' mx={3}>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Container Flex */}
                        <Flex bg='black'>
                            <Stack spacing={4} w='full' maxW='md' bg='black' p={2} my={0}>
                                <Heading lineHeight={1.1} fontSize={{ base: 'xl', sm: '2xl' }}>
                                    Edit Profile
                                </Heading>
                                <FormControl>
                                    <Stack direction={['column', 'row']} spacing={6}>
                                        <Center>
                                            <Avatar
                                                size='xl'
                                                src={selectedFile || authUser.profilePictureURL}
                                                border='2px solid white '
                                            />
                                        </Center>
                                        <Center w='full'>
                                            <Button
                                                w='full'
                                                color='#F5F5F5'
                                                bg='#363636'
                                                _hover={{ bg: 'whiteAlhpa.800' }}
                                                onClick={() => fileRef.current.click()}>
                                                Change Photo
                                            </Button>
                                        </Center>
                                        <Input
                                            type='file'
                                            accept='image/x-png,image/jpeg'
                                            hidden
                                            ref={fileRef}
                                            onChange={handleImageChange} />
                                    </Stack>
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize='sm'>Full Name</FormLabel>
                                    <Input
                                        placeholder='Full Name'
                                        size='sm'
                                        type='text'
                                        value={inputs.fullname}
                                        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize='sm'>Bio</FormLabel>
                                    <Textarea
                                        resize='none'
                                        placeholder='Bio'
                                        position='relative'
                                        spellCheck={true}
                                        value={inputs.bio}
                                        onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
                                    />
                                </FormControl>

                                <Stack spacing={6} direction={['column', 'row']}>
                                    <Button
                                        bg='red.400'
                                        color='white'
                                        w='full'
                                        size='sm'
                                        _hover={{ bg: 'red.500' }}
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        bg='blue.400'
                                        color='white'
                                        size='sm'
                                        w='full'
                                        _hover={{ bg: 'blue.500' }}
                                        onClick={handleEditProfile}
                                        isLoading={isLoading}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}