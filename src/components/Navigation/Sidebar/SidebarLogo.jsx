import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { InstagramLogo, InstagramMobileLogo } from '../../../assets/constants'

const SidebarLogo = () => {
    return (
        <>
            <Link
                to={'/'}
                as={RouterLink}
                pl={2}
                display={{ base: 'none', lg: 'block' }}
                cursor={'pointer'}
            >
                <InstagramLogo />
            </Link>
            <Link
                to={'/'}
                as={RouterLink}
                p={2}
                display={{ base: 'block', lg: 'none' }}
                cursor={'pointer'}
                borderRadius={6}
                _hover={{
                    bg: 'whiteAlpha.200'
                }}
                w={10}
            >
                <InstagramMobileLogo />
            </Link>
        </>
    )
}

export default SidebarLogo