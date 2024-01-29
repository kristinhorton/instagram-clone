import PropTypes from 'prop-types'
import { useState } from 'react'

import { Flex, Text } from "@chakra-ui/react"
import '../../styles/Feed/FeedPostCaption.css'

const FeedPostCaption = ({ username, caption }) => {
    const [expandCaption, setExpandCaption] = useState(false)

    return (
        <Flex>
            <Flex direction='column' w='full'>
                <Flex gap={0}>
                    <Text className={expandCaption ? 'expanded-caption' : 'collapsed-caption'}>
                        {`${username} `}
                        <Text
                            as='span'
                        >
                            {decodeURI(caption)}
                        </Text>
                    </Text>
                    {!expandCaption &&
                        <Text
                            className='expander'
                            onClick={() => setExpandCaption(!expandCaption)}
                        >{`more`}</Text>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FeedPostCaption

FeedPostCaption.propTypes = {
    username: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
}