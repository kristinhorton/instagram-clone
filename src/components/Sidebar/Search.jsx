import {
    Box,
    Flex,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import SearchModal from "../Search/SearchModal";

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", lg: "none" }}
            >
                <Flex
                    display='flex'
                    alignItems={'center'}
                    gap={4}
                    _hover={{ bg: 'whiteAlpha.400' }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: 'full' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    color='rgb(245, 245, 245)'
                    onClick={onOpen}
                >
                    <SearchLogo size={24} />
                    <Box display={{ base: "none", lg: "block" }}>Search</Box>
                </Flex>
            </Tooltip>
            <SearchModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Search