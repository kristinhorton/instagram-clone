import { Box, Flex, Skeleton, SkeletonCircle, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

export const LoadingSuggestedUsers = () => {
    return (
        <VStack
            gap={4}
            alignItems={'flex-start'}
            mb={2}
            mt={8}
        >
            <Flex gap={2} alignContent='flex-start' justifyContent={'center'} alignItems={'center'}>
                <SkeletonCircle size={10} />
                <VStack>
                    <Skeleton w='full' h='10px'>
                        <Box h='10px'>contents wrapped</Box>
                    </Skeleton>
                    <Skeleton w='full' h='10px'>
                        <Box h='10px'>contents wrapped</Box>
                    </Skeleton>
                </VStack>
            </Flex>
            <Skeleton w='full'>
                <Box h='300px'>contents wrapped</Box>
            </Skeleton>
            <Skeleton w='full' h='10px'>
                <Box h='10px'>contents wrapped</Box>
            </Skeleton>
        </VStack>
    )
}
