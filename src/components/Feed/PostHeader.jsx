import { React, useState } from 'react'

//components
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export const PostHeader = ({ post }) => {
    const [isFollowing, setIsFollowing] = useState(true)

    return (
        <>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                w={'full'}
                my={2}
                fontSize={12}
            >
                <Flex alignItems={'center'} gap={2}>
                    <Avatar src={post.avatar} size={'sm'} name={post.fullName || ''} />
                    <Flex
                        alignItems={'center'}
                        gap={1}
                    >
                        <Box fontWeight={'bold'} color={'white'}>{post.username}</Box>
                        <Box color={'whiteAlpha.700'}>{`• ${post.time}`}</Box>
                    </Flex>
                </Flex>
                <Box cursor={'pointer'}>
                    <Text
                        color={'white'}
                        fontWeight={'bold'}
                        _hover={{
                            color: 'white'
                        }}
                        transition={'0.2s ease-in-out'}
                        onClick={() => setIsFollowing(!isFollowing)}
                    >
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </Text>
                </Box>
            </Flex>
        </>
    )
}
