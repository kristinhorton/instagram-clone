import { Box, Tooltip, useDisclosure, Flex } from '@chakra-ui/react'
import { CreatePostLogo } from '../../../../assets/constants'
import CreatePostModal from '../../../Modals/CreateModal/CreatePostModal'

const Create = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Tooltip
                hasArrow
                label='Create'
                placement={'right'}
                ml={1}
                openDelay={500}
                display={{ base: 'block', lg: 'none' }}
            >
                <Flex
                    display='flex'
                    alignItems={'center'}
                    gap={4}
                    _hover={{ bg: 'whiteAlpha.400' }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: 'full' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    color='rgb(245, 245, 245)'
                    onClick={onOpen}
                >
                    <CreatePostLogo size={24} />
                    <Box display={{ base: 'none', lg: 'block' }}>
                        Create
                    </Box>
                </Flex>
            </Tooltip>
            <CreatePostModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Create