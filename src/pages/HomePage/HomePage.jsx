import { FeedPosts } from '../../components/Feed/FeedPosts'
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers'
import { Box, Container, Flex } from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <Container maxW='container.lg'>
      <Flex gap={10}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} py={10} mr={20} display={{ base: 'none', lg: 'block' }} maxW='300px'>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage