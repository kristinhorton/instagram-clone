import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//components
import { Box, VStack, Text, Input, Button, Flex } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';

export const AuthForm = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ""
    })

    const handleAuth = () => {
        console.log(inputs)
        if (isLogin) {
            if (!inputs.email || !inputs.password) {
                alert("Please fill in all fields")
            } else {
                navigate("/")
            }
        }
        if (!isLogin) {
            if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
                alert("Please fill in all fields")
            } else {
                navigate("/")
            }
        }
    }

    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Text fontSize='2xl'>Instagram Clone</Text>
                    <Input
                        placeholder={'Email'}
                        value={inputs.email}
                        fontSize={14}
                        type='email'
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    <Input
                        placeholder={'Password'}
                        value={inputs.password}
                        fontSize={14}
                        type='password'
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                    {!isLogin ?
                        <Input
                            placeholder={'Confirm Password'}
                            value={inputs.confirmPassword}
                            fontSize={14}
                            type='password'
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                        : null}

                    <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} onClick={handleAuth}>
                        {isLogin ? 'Log in' : 'Sign Up'}
                    </Button>
                    <Flex
                        alignItems={'center'} justifyContent={'center'} my={1} gap={1} w={'full'}>
                        <Box flex={2} h={'1px'} bg={'gray.400'} />
                        <Text mx={1} color={'white'}>OR</Text>
                        <Box flex={2} h={'px'} bg={'gray.400'} />
                    </Flex>

                    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                        <FcGoogle />
                        <Text mx={2} color={'blue.500'}>Log In With Google</Text>
                    </Flex>
                </VStack>
            </Box>

            <Box border={'1px solid gray'} borderRadius={4} padding={4}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? 'Don\'t have an account?' : 'Already have an Account?'}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
                        {isLogin ? 'Sign up' : 'Log in'}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
