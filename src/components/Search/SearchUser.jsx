import { Avatar, HStack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const SearchUser = ({username, fullname, profilePictureURL}) => {
    return (
        <HStack gap={4} spacing={3}>
            <Link
                to={`${username}`}
            >
                <Avatar
                    name={fullname}
                    src={profilePictureURL}
                    size='md' />
            </Link>
            <VStack spacing={0} alignItems='center' justifyContent='flex-start'>
                <Link
                    to={`/${username}`}
                >
                    <Text fontSize={14} fontWeight='bold'>
                        {username}
                    </Text>
                    <Text fontSize={14}>
                        {fullname}
                    </Text>
                </Link>
            </VStack>
        </HStack>
    )
}

export default SearchUser