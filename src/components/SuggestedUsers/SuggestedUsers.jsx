import { Flex, Text, VStack, Box, Link } from "@chakra-ui/react"
import { SuggestedHeader } from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { LoadingSuggestedUsers } from "../Loading/LoadingSuggestedUsers/LoadingSuggestedUsers"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers"

export const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers()

  return (
    <>
      {isLoading &&
        <LoadingSuggestedUsers />
      }
      {!isLoading &&
        <VStack py={8} gap={4} w='full'>
          <SuggestedHeader />
          {(suggestedUsers.length !== 0) && 
            <Flex alignItems='center' justifyContent='space-between' w='full'>
              <Text fontSize={14} fontWeight='bold' color='gray.500'>
                Suggested For You
              </Text>
              <Text
                fontSize={12}
                fontWeight='bold'
                color='blue.400'
                cursor='pointer'
                _hover={{ background: 'transparent' }}
              >
                See All
              </Text>
            </Flex>
          }

          {suggestedUsers.map((user) => (
            <SuggestedUser
              user={user}
              key={user.id}
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
