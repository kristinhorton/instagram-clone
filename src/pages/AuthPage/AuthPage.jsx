import React from 'react'
import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

//components
import AuthForm from '../../components/AuthForm/AuthForm'

export const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
                    {/* Left hand side */}
                    <Box display={{ base: "none", md: "block" }}>
                        <Image
                            src='src/public/auth-page-image.jpg'
                            h={460}
                            alt='phone image'
                            borderRadius='4'
                        />
                    </Box>
                    {/* Right hand side */}
                    <VStack spacing={4} align={'stretch'}>
                        <AuthForm />
                    </VStack>
                </Flex>
            </Container>

        </Flex>
    )
}

export default AuthPage