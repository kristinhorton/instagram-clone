import useGoogleAuth from "../../hooks/useGoogleAuth"

//components
import { Flex, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"

export const GoogleAuth = ({ prefix }) => {
  const {handleGoogleAuth, loading, error } = useGoogleAuth()

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      onClick={handleGoogleAuth}
    >
      <FcGoogle size={25} />
      <Text
        fontSize={14}
        mx={2}
        color={'blue.500'}
      >{prefix} with Google</Text>
    </Flex>
  )
}
