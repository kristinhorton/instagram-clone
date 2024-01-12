import { Container } from '@chakra-ui/react'
import { FeedPost } from './FeedPost'
import { LoadingFeed } from '../LoadingFeed/LoadingFeed'
import useGetUserPosts from '../../hooks/useGetUserPosts'
import NoPostsFound from './NoPostsFound'

export const FeedPosts = () => {
    const skeletonPosts = [0, 1, 2]
    const { isLoading, posts } = useGetUserPosts()
    const noPostsFound = !isLoading && !posts

    return (
        <Container maxW='468px' py={10} px={2} pt={1}>
            {isLoading && (
                <>
                    {skeletonPosts.map((_, index) => (
                        <LoadingFeed index={index} />
                    ))}
                </>
            )}

            {(!isLoading && posts) && (
                <>
                    {posts.map((post, index) => (
                        <FeedPost
                            post={post}
                            index={index}
                            key={index}
                        />
                    ))}
                </>
            )}

            {noPostsFound && (<NoPostsFound />)}

        </Container>
    )
}
