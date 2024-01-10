import { useRef } from "react"
import useSearchUser from "../../hooks/useSearchUser"

import { Button, Flex, FormControl, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci"
import SearchUser from "./SearchUser"

const SearchModal = ({ onClose, isOpen }) => {
    const searchTermRef = useRef(null)
    const {
        isLoading,
        searchUser,
        searchError,
        getSearchUser
    } = useSearchUser()

    const handleSearch = (e) => {
        e.preventDefault()
        getSearchUser(searchTermRef.current.value)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg='black' border='1px solid gray' maxW='400px'>
                <ModalHeader pb={0}>Search</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack direction='column' spacing={4} pb={4}>
                        <form>
                            <FormControl>
                                <HStack>
                                    <InputGroup size='sm'>
                                        <InputLeftElement pointerEvents='none'>
                                            <CiSearch color='gray.300' size={20} />
                                        </InputLeftElement>
                                        <Input
                                            pr='4.5rem'
                                            type='text'
                                            placeholder='Search username'
                                            bg='#3f3f40'
                                            ref={searchTermRef}
                                        />
                                    </InputGroup>
                                    <Button
                                        size='sm'
                                        colorScheme="blue"
                                        my={4}
                                        _hover={{ colorScheme: 'blue' }}
                                        onClick={handleSearch}
                                        isLoading={isLoading}
                                    >
                                        Search
                                    </Button>
                                </HStack>
                            </FormControl>
                        </form>
                        {isLoading &&
                            <Flex w='full' alignItems='center' justifyContent='center'>
                                <Spinner size='sm' />
                            </Flex>}
                        {!isLoading && searchUser && (
                            <Flex w='full' alignItems='center' justifyContent='flex-start'>
                                <SearchUser
                                    username={searchUser.username}
                                    fullname={searchUser.fullname}
                                    profilePictureURL={searchUser.profilePictureURL}
                                />
                            </Flex>
                        )}
                        {!isLoading && searchError && (
                            <Flex w='full' alignItems='center' justifyContent='center'>
                                No results found.
                            </Flex>
                        )}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default SearchModal