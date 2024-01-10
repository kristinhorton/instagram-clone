import { Box, Tooltip, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo } from '../../assets/constants'

const Create = () => {
    return (
        <Tooltip
            hasArrow
            label='Create'
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', lg: 'none' }}
        >
            <Link
                display={'flex'}
                to={'/create'}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                color='rgb(245, 245, 245)'
            >
                <CreatePostLogo size={24} />
                <Box display={{ base: 'none', lg: 'block' }}>
                    Create
                </Box>
            </Link>
        </Tooltip>
    )
}

export default Create