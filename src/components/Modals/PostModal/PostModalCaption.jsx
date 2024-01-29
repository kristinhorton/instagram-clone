import PropTypes from 'prop-types'
import { Avatar, Flex, HStack, Text } from "@chakra-ui/react"

const PostModalCaption = ({ userName, fullName, profilePictureURL, caption }) => {
    return (
        <Flex gap={4} my={2}>
            <HStack gap={2}>
                <Avatar src={profilePictureURL} name={fullName} size='sm' alignSelf='self-start' />
                <Flex direction='column'>
                    <Flex gap={2}>
                        <Text fontWeight='bold' fontSize={12} style={{ whiteSpace: 'pre-line' }}>
                            {userName} <Text as='span' fontWeight='400'>{decodeURI(caption)}</Text>
                        </Text>

                    </Flex>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default PostModalCaption

PostModalCaption.propTypes = {
    userName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    profilePictureURL: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
}