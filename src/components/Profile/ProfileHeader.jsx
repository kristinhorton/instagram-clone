import React from 'react'

//components
import { Avatar, Button, Flex, VStack, Text } from '@chakra-ui/react'

export const ProfileHeader = () => {
    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            ps={10}
            direction={{ base: 'column', sm: 'row' }}
        >

            <Avatar
                name='Kristin Horton'
                alt='kristinhorton avatar'
                src='src/public/JPO02037_Original.jpg'
                size={{ base: 'xl', md: '2xl' }}
                showBorder={true}
                justifySelf='center'
                alignSelf='flex-start'
                mx='auto'
            />

            <VStack
                alignItems='start'
                gap={2}
                mx='auto'
                flex={1}
            >
                <Flex
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                    alignItems='center'
                    w='full'
                >
                    <Text fontSize={{ base: 'sm', md: 'lg' }}>kristinhorton</Text>
                    <Flex gap={4} alignItems='center' justifyContent='center'>
                        <Button
                            color='#F5F5F5'
                            bg='#363636'
                            _hover={{ bg: 'whiteAlhpa.800' }}
                            size={{ base: 'xs', md: 'sm' }}
                        >
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>

                <Flex
                    alignItems='center'
                    gap={{ base: 2, sm: 4 }}
                    fontSize={{ base: 'xs', md: 'sm' }}
                >
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>10</Text>
                        Posts
                    </Text>
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>300</Text>
                        Followers
                    </Text>
                    <Text>
                        <Text as='span' fontWeight='bold' mr={1}>298</Text>
                        Following
                    </Text>
                </Flex>

                <Flex alignItems='center' gap={4}>
                    <Text fontSize='sm' fontWeight='bold'>
                        Kristin Horton
                    </Text>
                </Flex>
                <Text fontSize='sm'>
                    just a girl tryna survive this world
                </Text>
            </VStack>
        </Flex>
    )
}
