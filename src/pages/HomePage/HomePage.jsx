import React from 'react'
import { FeedPosts } from '../../components/Feed/FeedPosts'
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers'

//components
import { Box, Container, Flex, Spacer } from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box
          flex={10}
          py={10}
        >
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={10}
          display={{ base: 'none', lg: 'block' }}
          maxW='300px'
        >
          <SuggestedUsers />
        </Box>
      </Flex>

    </Container>
  )
}

export default HomePage