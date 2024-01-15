import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useSignUp } from "../../hooks/useSignUp"

export const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    fullname: '',
    username: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const { loading, error, signup } = useSignUp()

  return (
    <>
      <Input
        placeholder={'Full Name'}
        value={inputs.fullname}
        fontSize={14}
        size='sm'
        type='text'
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
        isRequired={true}
      />
      <Input
        placeholder={'Username'}
        value={inputs.username}
        fontSize={14}
        size='sm'
        type='text'
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        isRequired={true}
      />
      <Input
        placeholder={'Email'}
        value={inputs.email}
        fontSize={14}
        size='sm'
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
            {showPassword ? <Text fontSize='12' pr={2}>Hide</Text> : <Text fontSize='12' pr={2}>Show</Text>}
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
        size={'sm'}
        fontSize={14}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign up
      </Button>
    </>
  )
}
