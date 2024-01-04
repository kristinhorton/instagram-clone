import React from 'react'
import { Feed } from '../../components/Feed/Feed'
import { SuggestedUsers } from '../../components/SuggestedUsers/SuggestedUsers'

//components
import { Box, Container, Flex } from '@chakra-ui/react'


export const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box
          flex={4}
          py={10}
        >
          <Feed />
        </Box>
        <Box
          flex={2}
          mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={300}
        >
          <SuggestedUsers />
        </Box>
      </Flex>

    </Container>
  )
}

export default HomePage