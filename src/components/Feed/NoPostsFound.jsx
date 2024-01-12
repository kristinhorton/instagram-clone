import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NoPostsFound = () => {
  return (
    <Flex flexDir='column' textAlign='center' mx='auto' mt={10}>
        <Text fontSize='2x1'>No Posts</Text>
    </Flex>
  )
}

export default NoPostsFound