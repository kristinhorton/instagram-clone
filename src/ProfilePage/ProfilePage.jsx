import React from 'react'

//components
import { Container, Flex } from '@chakra-ui/react'
import { ProfileHeader } from '../components/Profile/ProfileHeader'
import { ProfileTabs } from '../components/Profile/ProfileTabs'
import { ProfilePosts } from '../components/Profile/ProfilePosts'


export const ProfilePage = () => {
    return (
        <Container maxW='container-lg' py={5}>
            <Flex
                maxW='75%'
                py={10}
                px={4}
                pl={{ base: 4, md: 10 }}
                w='full'
                mx='auto'
                flexDirection='column'
            >
                <ProfileHeader />
            </Flex>
            <Flex
                px={{ base: 2, small: 4 }}
                maxW='75%'
                mx='auto'
                borderTop='1px solid'
                borderColor='whiteAlpha.200'
                flexDirection='column'
            >
                <ProfileTabs />
                <ProfilePosts />
            </Flex>
        </Container>
    )
}
