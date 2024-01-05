import { Avatar, Flex, Text } from '@chakra-ui/react'

export const Comment = ({ createdAt, username, avatar, text }) => {
    return (
        <Flex gap={4} my={2}>
            <Avatar src={avatar} name={username} size='sm' />
            <Flex direction='column'>
                <Flex gap={2}>
                    <Text fontWeight='bold' fontSize={12}>
                        {username} <Text as='span' fontWeight='400'>{text}</Text>
                    </Text>

                </Flex>
                <Text fontSize={12} color='gray'>{createdAt}</Text>
            </Flex>
        </Flex>
    )
}
