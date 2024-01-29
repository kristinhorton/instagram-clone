import { Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react"

const LoadingComment = () => {
    return (
        <Flex gap={4} w='full' alignItems='center'>
            <SkeletonCircle h={10} w={10} />
            <Flex gap={1} flexDir='column'>
                <Skeleton h={2} w={100} />
                <Skeleton h={2} w={50} />
            </Flex>
        </Flex>
    )
}

export default LoadingComment