import { LikeLogo } from '../../../../assets/constants'
import { Box, Flex, Tooltip } from '@chakra-ui/react'

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
            <Flex
                display={'flex'}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                color='rgb(245, 245, 245)'
            >
                <LikeLogo size={24} />
                <Box display={{ base: 'none', lg: 'block' }}>
                    Notifications
                </Box>
            </Flex>
        </Tooltip>
    )
}

export default Notifications