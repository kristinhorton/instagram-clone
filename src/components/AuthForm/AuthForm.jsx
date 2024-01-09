import { useState } from 'react'

//components
import { Box, VStack, Text, Flex } from '@chakra-ui/react'
import { InstagramLogo } from '../../assets/constants';
import { Login } from './Login';
import { Signup } from './Signup';
import { GoogleAuth } from './GoogleAuth'

export const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <InstagramLogo />
                    {isLogin && <Login />}
                    {!isLogin && <Signup />}
                    <Flex
                        alignItems={'center'} justifyContent={'center'} my={1} gap={1} w={'full'}>
                        <Box flex={2} h={'1px'} bg={'gray.400'} />
                        <Text mx={1} color={'white'}>OR</Text>
                        <Box flex={2} h={'px'} bg={'gray.400'} />
                    </Flex>
                    <GoogleAuth prefix={isLogin ? 'Log in' : 'Sign up'} />
                </VStack>
            </Box>

            <Box border={'1px solid gray'} borderRadius={4} padding={4}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? 'Don\'t have an account?' : 'Already have an Account?'}
                    </Box>
                    <Box 
                    onClick={() => setIsLogin(!isLogin)} 
                    color={'blue.500'} 
                    cursor={'pointer'}
                    fontSize={14}
                    >
                        {isLogin ? 'Sign up' : 'Log in'}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
