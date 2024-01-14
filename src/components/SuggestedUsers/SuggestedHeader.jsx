import { Avatar, Button, Text, Flex, VStack, HStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore"

export const SuggestedHeader = () => {
    const { handleLogout, loading, error } = useLogout()
    const authUser = useAuthStore((state) => state.user)

    if (!authUser) return null
    return (
        <Flex justifyContent='space-between' alignItems='center' w='full' gap={12}>
            <HStack gap={2}>
                <Link
                    to={`${authUser?.username}`}
                >
                    <Avatar
                        name={authUser?.fullname}
                        src={authUser?.profilePictureURL}
                        size='md' />
                </Link>
                <VStack spacing={0} alignItems='center' justifyContent='flex-start' w='full'>
                    <Link
                        to={`/${authUser?.username}`}
                    >
                        <Text fontSize={14} fontWeight='bold'>
                            {authUser?.username}
                        </Text>
                        <Text fontSize={14}>
                            {authUser?.fullname}
                        </Text>
                    </Link>
                </VStack>
            </HStack>
            <Button
                size='xs'
                background='transparent'
                fontSize={12}
                fontWeight='bold'
                color='blue.400'
                variant='ghost'
                _hover={{ background: 'transparent' }}
                p={0}
                onClick={handleLogout}
                isLoading={loading}
            >
                Log Out
            </Button>
        </Flex>
    )
}
