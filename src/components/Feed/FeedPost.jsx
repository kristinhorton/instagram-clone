import useGetUserById from '../../hooks/useGetUserById'

import { Box, Container, Image } from '@chakra-ui/react'
import FeedPostHeader from './FeedPostHeader'
import FeedPostFooter from './FeedPostFooter'

export const FeedPost = ({ post }) => {
  const { isLoading, userProfile } = useGetUserById(post?.createdBy)

  if (isLoading) return
  return (
    <Container padding={0}>
      <FeedPostHeader post={post} userProfile={userProfile} />
      <Box
        borderRadius={4}
        overflow='hidden'
        boxSize='fit-content'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src={post?.imageURL}
          key={post?.id}
          objectFit='cover'
          w='600px'
          h='600px'
        />
      </Box>
      <FeedPostFooter post={post} userProfile={userProfile} />
      <Box w='full' h='2px' mb={4} mt={4} />
    </Container>
  )
}
