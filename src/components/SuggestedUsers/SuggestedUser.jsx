import { Avatar, Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"
import { useState } from "react"

export const SuggestedUser = ({ avatar, followers, name, username }) => {
    const [isFollowed, setIsFollowed] = useState(false)

    return (
        <Flex justifyContent='space-between' alignItems='center' w='full'>
            <HStack gap={2}>
                <Avatar src={avatar} name={name} size='md' />
                <VStack spacing={0} alignItems='flex-start' justifyContent='flex-start'>
                    <Box
                        fontSize={14}
                        fontWeight='bold'
                    >
                        {name}
                    </Box>
                    <Box
                        fontSize={14}
                        color='gray.500'
                    >
                        {username}
                    </Box>
                </VStack>
            </HStack>
            <Button
                fontSize={14}
                fontWeight='bold'
                color='blue.400'
                variant='ghost'
                _hover={{ color: 'gray.400' }}
                p={0}
                onClick={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
        </Flex>
    )
}
