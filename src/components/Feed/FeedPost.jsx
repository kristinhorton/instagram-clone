import useGetUserById from '../../hooks/useGetUserById'
import PropTypes from 'prop-types'

import { Box, Container, Flex, Image } from '@chakra-ui/react'
import FeedPostHeader from './FeedPostHeader'
import FeedPostFooter from './FeedPostFooter'
import '../../styles/Feed/FeedPost.css'

const FeedPost = ({ post }) => {
  const { isLoading, userProfile } = useGetUserById(post?.createdBy)

  if (isLoading) return
  return (
    <Container className='container'>
      <FeedPostHeader
        createdAt={post?.createdAt}
        userId={userProfile?.uid}
        userName={userProfile?.username}
        fullName={userProfile?.fullname}
        profilePictureURL={userProfile?.profilePictureURL}
      />
      <Flex className='image-box'>
        <Image
          src={post?.imageURL}
          key={post?.id}
          className='image'
        />
      </Flex>
      <FeedPostFooter
        post={post}
        userProfile={userProfile}
      />
      <Box className='image-divider' />
    </Container>
  )
}

export default FeedPost

FeedPost.proptypes = {
  post: PropTypes.shape({
    caption: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      createdAt: PropTypes.number.isRequired,
      createdBy: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      postId: PropTypes.string.isRequired
    })),
    createdAt: PropTypes.number.isRequired,
    createdBy: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
}