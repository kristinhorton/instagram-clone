import { timeElapsed } from '../../utilities/timeEsapsed'
import useFollowAndUnfollowUser from '../../hooks/useFollowAndUnfollowUser'

import { Avatar, Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const FeedPostModalHeader = ({ userProfile }) => {

    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            w='full'
            my={2}
            fontSize={12}
        >
            <HStack gap={2}>
                <Link
                    to={`${userProfile?.username}`}
                    cursor='pointer'
                >
                    <Avatar src={userProfile?.profilePictureURL} size='sm' name={userProfile?.fullName} />
                </Link>
                <Flex
                    alignItems='center'
                    gap={1}
                >
                    <Link
                        to={`${userProfile?.username}`}
                        cursor='pointer'

                    >
                        <Box fontWeight='bold' color='white'>{userProfile?.username}</Box>
                    </Link>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default FeedPostModalHeader