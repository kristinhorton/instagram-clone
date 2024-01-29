import PropTypes from 'prop-types'
import useGetUserById from '../../../hooks/useGetUserById'
import { timeElapsed } from '../../../utilities/timeEsapsed'

import { Avatar, Flex, Text } from '@chakra-ui/react'
import LoadingComment from '../../Loading/LoadingComment'
import { Link } from 'react-router-dom'

const PostModalComment = ({ comment, createdAt, createdBy }) => {
    const { userProfile, isLoading } = useGetUserById(createdBy)

    return (
        <>
            {isLoading && (<LoadingComment />)}

            {!isLoading && (
                <Flex gap={4} my={2}>
                    <Link
                        to={`/${userProfile?.username}`}
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
                                {userProfile?.username} <Text as='span' fontWeight='400'>{comment}</Text>
                            </Text>

                        </Flex>
                        <Text fontSize={12} color='gray'>{timeElapsed(createdAt)}</Text>
                    </Flex>
                </Flex>
            )}
        </>
    )
}

export default PostModalComment

PostModalComment.propTypes = {
    createdAt: PropTypes.number.isRequired,
    createdBy: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
}