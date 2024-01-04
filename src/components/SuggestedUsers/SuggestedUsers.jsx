import { useState, useEffect } from "react"
import { Flex, Text, VStack, Box, Link } from "@chakra-ui/react"
import { SuggestedHeader } from "./SuggestedHeader"
import { users } from '../../assets/suggestedUsers.json'
import { SuggestedUser } from "./SuggestedUser"
import { LoadingSuggestedUsers } from "../LoadingSuggestedUsers/LoadingSuggestedUsers"

export const SuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  })
  return (
    <>
      {isLoading &&
        <LoadingSuggestedUsers />
      }
      {!isLoading &&

        <VStack py={8} px={6} gap={4} w='full'>
          <SuggestedHeader />
          <Flex alignItems='center' justifyContent='space-between' w='full'>
            <Text fontSize={12} fontWeight='bold' color='gray.500'>
              Suggested For You
            </Text>
            <Text
              fontSize={12}
              fontWeight='bold'
              color='blue.400'
              cursor='pointer'
              _hover={{ color: 'gray.400' }}
            >
              See All
            </Text>
          </Flex>

          {users.map((user, index) => (
            <SuggestedUser
              name={user.fullname}
              followers={user.totalFollowers}
              avatar={user.avatar}
              username={user.username}
              key={`user-${index}`}
            />
          ))}

          <Box fontSize={12} color={'gray.500'} mt={5} alignSelf='start'>
            {`@2024 Built By Kristin Horton • `}
            <Link
              href='https://github.com/kristinhorton/instagram-clone/tree/main'
              target='_blank'
              color='blue.500'
              fontSize={12}
              style={{ textDecoration: 'none' }}
            >

              github
            </Link>
          </Box>
        </VStack>
      }
    </>
  )
}
