import { Box, Flex, Skeleton, SkeletonCircle, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

const LoadingFeed = ({ index }) => {
    return (
        <VStack
            key={`skeleton-${index}`}
            gap={4}
            alignItems={'flex-start'}
            mb={2}>
            <Flex gap={2} alignContent='flex-start' justifyContent={'center'} alignItems={'center'}>
                <SkeletonCircle size={10} />
                <Skeleton w='400px' h='10px'>
                    <Box h='10px'>contents wrapped</Box>
                </Skeleton>
            </Flex>
            <Skeleton w='full'>
                <Box h='500px'>contents wrapped</Box>
            </Skeleton>
            <Skeleton w='full'>
                <Box h='10px'>contents wrapped</Box>
            </Skeleton>
            <Skeleton w='full' mb={4}>
                <Box h='20px'>contents wrapped</Box>
            </Skeleton>
        </VStack>
    )
}

export default LoadingFeed
