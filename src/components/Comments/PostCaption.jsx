import { Avatar, Flex, Text } from "@chakra-ui/react"

const PostCaption = ({ createdAt, username, avatar, text }) => {
    const formatDate = new Date(createdAt).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })

    return (
        <Flex gap={4} my={2}>
            <Avatar src={avatar} name={username} size='sm' />
            <Flex direction='column'>
                <Flex gap={2}>
                    <Text fontWeight='bold' fontSize={12}>
                        {username} <Text as='span' fontWeight='400'>{text}</Text>
                    </Text>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default PostCaption