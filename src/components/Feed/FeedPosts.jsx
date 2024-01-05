import React, { useState, useEffect } from 'react'
import { posts } from '../../assets/posts.json'

//components
import { Container } from '@chakra-ui/react'
import { FeedPost } from './FeedPost'
import { LoadingFeed } from '../LoadingFeed/LoadingFeed'

export const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const skeletonPosts = [0, 1, 2]

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
    })


    return (
        <Container maxW='468px' py={10} px={2} pt={1}>
            {isLoading &&
                <>
                    {skeletonPosts.map((_, index) => (
                        <LoadingFeed index={index} />
                    ))}
                </>
            }
            {!isLoading &&
                <>
                    {posts.map((post, index) => (
                        <FeedPost
                            post={post}
                            index={index}
                            key={index}
                        />
                    ))}
                </>
            }
        </Container>
    )
}
