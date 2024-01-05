import React from 'react'

//components
import { Flex, Box, Text } from '@chakra-ui/react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'
import { LuContact2 } from "react-icons/lu";


export const ProfileTabs = () => {
    return (
        <Flex
            w='full'
            justifyContent='center'
            gap={{ base: 4, sm: 10 }}
            textTransform='uppercase'
            fontWeight='bold'
        >
            <Flex
                borderTop='1px solid white'
                alignItems='center'
                p={3}
                gap={1}
                cursor='pointer'
            >
                <Box fontSize={20}>
                    <BsGrid3X3 />
                </Box>
                <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>
                    Posts
                </Text>
            </Flex>
            <Flex
                alignItems='center'
                p={3}
                gap={1}
                cursor='not-allowed'
                color='#363636'
            >
                <Box fontSize={20}>
                    <BsBookmark />
                </Box>
                <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>
                    Saved
                </Text>
            </Flex>
            <Flex
                alignItems='center'
                p={3}
                gap={1}
                cursor='not-allowed'
                color='#363636'
            >
                <Box fontSize={20}>
                    <LuContact2 />
                </Box>
                <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>
                    Tagged
                </Text>
            </Flex>
        </Flex>
    )
}
