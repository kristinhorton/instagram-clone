import { VStack } from '@chakra-ui/react'
import React from 'react'
import PostCaption from './PostCaption'
import PostComment from './PostComment'

const PostComments = ({ post, userProfile}) => {
    return (
        <VStack
            w='full'
            h='full'
            maxH='630px'
            alignItems='start'
            overflowY='auto'
        >
            {post.caption && (
                <PostCaption
                    createdAt={post.createdAt}
                    username={userProfile.username}
                    avatar={userProfile.profilePictureURL}
                    text={post.caption}
                />
            )
            }
            {post.comments && (
                post.comments.map((comment, index) => (
                    <PostComment
                        key={`comment-${index}-${comment.postId}`}
                        comment={comment}
                    />
                ))
            )}
        </VStack>
    )
}

export default PostComments