import useGetUserById from '../../hooks/useGetUserById'
import { timeElapsed } from '../../utilities/timeEsapsed'

import { Avatar, Flex, Text } from '@chakra-ui/react'
import LoadingComment from './LoadingComment'
import { Link } from 'react-router-dom'

const PostComment = ({ comment }) => {
    const { userProfile, isLoading } = useGetUserById(comment?.createdBy)

    return (
        <>
            {isLoading && (<LoadingComment />)}

            {!isLoading && (
                <Flex gap={4} my={2}>
                    <Link 
                    to={`/${userProfile.username}`}
                    cursor='pointer'
                    >
                        <Avatar
                            src={userProfile?.profilePictureURL}
                            name={userProfile?.fullname} size='sm'
                        />
                    </Link>
                    <Flex direction='column'>
                        <Flex gap={2}>
                            <Text fontWeight='bold' fontSize={12}>
                                {userProfile?.username} <Text as='span' fontWeight='400'>{comment.comment}</Text>
                            </Text>

                        </Flex>
                        <Text fontSize={12} color='gray'>{timeElapsed(comment?.createdAt)}</Text>
                    </Flex>
                </Flex>
            )}
        </>
    )
}

export default PostComment