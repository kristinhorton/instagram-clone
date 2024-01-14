import { FeedPosts } from '../../components/Feed/FeedPosts'
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers'
import { Box, Container, Flex } from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <Container maxW='container.lg'>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20} display={{ base: 'none', xl: 'block' }} maxW='300px'>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage