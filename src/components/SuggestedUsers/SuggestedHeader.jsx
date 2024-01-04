import { Avatar, Button,  Text, Flex, VStack, Link, HStack } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'

export const SuggestedHeader = () => {
    return (
        <Flex justifyContent='space-between' alignItems='center' w='full' gap={12}>
            <HStack gap={2}>
                <Avatar name='Kristin Horton' src='src/public/profile-pic-7.jpg' size='md' />
                <VStack spacing={0}>
                    <Text fontSize={12} fontWeight='bold'>
                        kristinhorton
                    </Text>
                    <Text fontSize={11}>
                        Kristin Horton
                    </Text>
                </VStack>
            </HStack>
            <Button
                as={RouterLink}
                to='/auth'
                fontSize={12}
                fontWeight='bold'
                color='blue.400'
                variant='ghost'
                _hover={{ color: 'gray.400' }}
                p={0}
            >
                Log Out
            </Button>
        </Flex>
    )
}
