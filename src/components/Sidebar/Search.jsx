import { Box, Tooltip, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { SearchLogo } from '../../assets/constants'

const Search = () => {
    return (
        <Tooltip
            hasArrow
            label='Search'
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', lg: 'none' }}
        >
            <Link
                display={'flex'}
                to={'/search'}
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
                <SearchLogo size={24} />
                <Box display={{ base: 'none', lg: 'block' }}>
                    Search
                </Box>
            </Link>
        </Tooltip>
    )
}

export default Search