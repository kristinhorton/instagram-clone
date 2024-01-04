import React from 'react'

//components
import { Box, Container, Image } from '@chakra-ui/react'
import { PostHeader } from './PostHeader'
import { PostFooter } from './PostFooter'

export const FeedPost = ({ post, index }) => {

  return (
    <Container name='post-container' padding={0}>
      <PostHeader post={post} />
      <Box name='post-image-box' m={0} p={0}>
        <Image
          src={post.src}
          alt={post.username}
          key={`image-${index}`}
          objectFit='cover'
          borderRadius={4}
          w="468px"
          h="468px"
        />
      </Box>
      <PostFooter post={post} />
      {/* <Box w={'full'} h={'1px'} bg={'whiteAlpha.400'} mb={4} mt={4}/> */}
    </Container>
  )
}
