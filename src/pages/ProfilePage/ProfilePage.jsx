import { useParams, Link as RouterLink } from 'react-router-dom'

//components
import { Container, Flex, Link, Text } from '@chakra-ui/react'
import { ProfileHeader } from '../../components/Profile/ProfileHeader'
import { ProfileTabs } from '../../components/Profile/ProfileTabs'
import { ProfilePosts } from '../../components/Profile/ProfilePosts'
import { LoadingProfileHeader } from '../../components/LoadingProfile/LoadingProfileHeader'
import useGetProfileByUsername from '../../hooks/useGetProfileByUsername'


export const ProfilePage = () => {
    const { username } = useParams()
    const { isLoading, userProfile } = useGetProfileByUsername(username)

    const userNotFound = !isLoading && !userProfile
    if (userNotFound) return <UserNotFound />

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
                {isLoading && (
                    <LoadingProfileHeader />
                )}
                {!isLoading && userProfile && (
                    <ProfileHeader user={userProfile} />
                )}
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

const UserNotFound = () => {
    return (
        <Flex
            flexDir={'column'}
            textAlign={'center'}
            mx='auto'
            pt={5}
        >
            <Text fontSize='2xl'>User Not Found</Text>
            <Link
                as={RouterLink}
                to={'/'}
                color={'blue.500'}
                w='max-content'
                mx='auto'
            >
                Go Home
            </Link>
        </Flex>
    )
}