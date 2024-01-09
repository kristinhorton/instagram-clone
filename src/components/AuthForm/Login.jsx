import useLogin from "../../hooks/useLogin"

//components
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { GrHide, GrView } from "react-icons/gr"

export const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false)
    const {loading, error, login} = useLogin()

    return (
        <>
            <Input
                placeholder={'Email'}
                value={inputs.email}
                fontSize={14}
                type='email'
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                isRequired={true}
            />
            <InputGroup>
                <Input
                    placeholder={'Password'}
                    value={inputs.password}
                    fontSize={14}
                    size='sm'
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    isRequired={true}
                />
                <InputRightElement h='full'>
                    <Button
                        variant='ghost'
                        size={'sm'}
                        fontSize={14}
                        onClick={() => setShowPassword(!showPassword)}
                        _hover={{ bg: 'none' }}
                    >
                        {showPassword ? <GrHide size={10} /> : <GrView size={10} />}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}

            <Button
                w={'full'}
                colorScheme='blue'
                size={'sm'} fontSize={14}
                onClick={() => login(inputs)}
            >
                Log in
            </Button>
        </>
    )
}
