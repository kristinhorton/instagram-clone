import { Button, Container, Flex, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { InstagramLogo } from '../../assets/constants'


export const Navbar = () => {
    return (
        <Container maxW='container.lg' my={4}>
            <Flex
                w='full'
                justifyContent={{ base: 'center', sm: 'space-between' }}
                alignItems='center'
            >
                <InstagramLogo
                    display={{ base: 'none', md: 'block' }}
                    cursor='pointer'
                />
                <Flex gap={4}>
                    <Link to='/auth'>
                        <Button colorScheme='blue' size='sm'>
                            Log in
                        </Button>
                    </Link>
                    <Link>
                        <Button colorScheme='blue' variant='outline' size='sm'>
                            Sign up
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}
