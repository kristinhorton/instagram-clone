import { Box, Button, HStack, Modal, ModalBody, ModalContent, ModalOverlay, Text, VStack } from "@chakra-ui/react"

const ConfirmDeleteModal = ({ isOpen, onClose, setConfirmDeleteResult }) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            size='xs'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody
                    bg='black'
                    border='1px solid gray'
                    p={5}
                    borderRadius={4}
                >
                    <VStack>
                        <Text color='white'>Are you sure you want to delete?</Text>
                        <HStack spacing={3} alignItems='center' justifyContent='center'>
                            <Box>
                                <Button colorScheme='blue' value={'confirm'} onClick={() => setConfirmDeleteResult(true)}>Confirm</Button>

                            </Box>
                            <Box>
                                <Button colorScheme='red' value='cancel' onClick={() => setConfirmDeleteResult(false)}>Cancel</Button>

                            </Box>
                        </HStack>
                    </VStack>

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmDeleteModal