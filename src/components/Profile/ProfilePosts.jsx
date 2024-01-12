import useGetUserPosts from '../../hooks/useGetUserPosts'

import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import { ProfilePost } from './ProfilePost'
import NoPostsFound from '../Feed/NoPostsFound'

export const ProfilePosts = () => {
    const skeletonPosts = [0, 1, 2]
    const { isLoading, posts } = useGetUserPosts()
    const postsFound = !isLoading && posts
    const noPostsFound = !isLoading && !posts

    return (
        <Grid
            templateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)'
            }}
            gap={2}
        >
            {isLoading && (
                skeletonPosts.map((_, idx) => (
                    <VStack key={idx} alignItems='flex-start' gap={4}>
                        <Skeleton w='full'>
                            <Box h='300px'>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))
            )}

            {postsFound && (
                posts.map((post) => (
                    <ProfilePost post={post} key={post.id} />
                ))
            )}

            {noPostsFound && <NoPostsFound />}
        </Grid>
    )
}
