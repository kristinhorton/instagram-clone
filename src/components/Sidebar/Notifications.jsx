import { LikeLogo } from '../../assets/constants'
import { Box, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Notifications = () => {
    return (
        <Tooltip
            hasArrow
            label='Notifications'
            placement={'right'}
            ml={1}
            openDelay={500}
            display={{ base: 'block', lg: 'none' }}
        >
            <Link
                display={'flex'}
                to={'/notifications'}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                color='rgb(245, 245, 245)'
                isDisabled={true}
            >
                <LikeLogo size={24} />
                <Box display={{ base: 'none', lg: 'block' }}>
                    Notifications
                </Box>
            </Link>
        </Tooltip>
    )
}

export default Notifications