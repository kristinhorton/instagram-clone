import React, { useState, useEffect } from 'react'
import { posts } from '../../assets/profileposts.json'

//components
import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import { ProfilePost } from './ProfilePost'

export const ProfilePosts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
    })

    return (
        <Grid
            templateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)'
            }}
            gap={2}
        >
            {isLoading &&
                [0, 1, 2, 3, 4, 5, 6, 7, 8].map((skeleton, index) => (
                    <VStack key={index} alignItems='flex-start' gap={4}>
                        <Skeleton w='full'>
                            <Box h='300px'>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))
            }
            {!isLoading &&
                posts.map((post, index) => (
                    <ProfilePost post={post} key={index} />
                ))
            }
        </Grid>
    )
}
