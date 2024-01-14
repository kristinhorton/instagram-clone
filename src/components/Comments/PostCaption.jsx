import { Avatar, Flex, Text } from "@chakra-ui/react"

const PostCaption = ({ username, avatar, text }) => {
    return (
        <Flex gap={4} my={2}>
            <Avatar src={avatar} name={username} size='sm' />
            <Flex direction='column'>
                <Flex gap={2}>
                    <Text fontWeight='bold' fontSize={12} style={{whiteSpace: 'pre-line' }}>
                        {username} <Text as='span' fontWeight='400'>{decodeURI(text)}</Text>
                    </Text>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default PostCaption