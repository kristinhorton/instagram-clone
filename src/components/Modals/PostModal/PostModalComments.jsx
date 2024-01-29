import PropTypes from 'prop-types'

import { VStack } from '@chakra-ui/react'
import PostCaption from './PostModalCaption'
import PostComment from './PostModalComment'

const PostModalComments = ({ createdAt, caption, comments, userName, fullName, profilePictureURL }) => {
    return (
        <VStack
            w='full'
            h='full'
            maxH='630px'
            alignItems='start'
            overflowY='auto'
        >
            {caption && (
                <PostCaption
                    createdAt={createdAt}
                    userName={userName}
                    fullName={fullName}
                    profilePictureURL={profilePictureURL}
                    caption={caption}
                />
            )
            }
            {comments && (
                comments.map((comment, index) => (
                    <PostComment
                        key={`${comment?.postId}-${index}`}
                        comment={comment?.comment}
                        createdAt={comment?.createdAt}
                        createdBy={comment?.createdBy}
                    />
                ))
            )}
        </VStack>
    )
}

export default PostModalComments

PostModalComments.prototypes = {
    profilePictureURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    caption: PropTypes.string,
    createdAt: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.number.isRequired,
        createdBy: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        postId: PropTypes.string.isRequired
    }))
}