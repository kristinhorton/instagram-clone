import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NoPostsFound = () => {
  return (
    <Flex flexDir='column' textAlign='center' mx='auto' mt={10}>
        <Text fontSize='lg'>Nothing to see here.</Text>
        <Text fontSize='lg'>Follow your friends to see more posts!</Text>
    </Flex>
  )
}

export default NoPostsFound