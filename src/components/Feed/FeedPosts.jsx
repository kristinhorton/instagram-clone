import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import LoadingFeed from '../Loading/LoadingFeed/LoadingFeed'
import NoPostsFound from './NoPostsFound'

import useGetFeedPosts from '../../hooks/useGetFeedPosts'

export const FeedPosts = () => {
    const skeletonPosts = [0, 1, 2]
    const { isLoading, posts } = useGetFeedPosts()
    const noPostsFound = !isLoading && (posts?.length == 0 || !posts)
    const feedHasPosts = !isLoading && posts?.length > 0

    return (
        <Container className='container'>
            {isLoading && (
                <>
                    {skeletonPosts.map((_, index) => (
                        <LoadingFeed index={index} key={index} />
                    ))}
                </>
            )}
            {feedHasPosts && (
                <>
                    {posts.map((post, index) => (
                        <FeedPost
                            post={post}
                            key={post?.id}
                        />
                    ))}
                </>
            )}
            {noPostsFound && (<NoPostsFound />)}
        </Container>
    )
}
