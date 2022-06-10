import { Box, Flex, Text } from "@chakra-ui/layout";
import Player from "./player";

const PlayerBar = () => {
    return (
        <Box height="100px" width="100vw" bg="gray.900" padding="10px">
            <Flex align="center">
                <Box color="white" padding="20px" width="30%">
                    <Text fontSize="16px">Song Name</Text>
                    <Text fontSize="xs" color="gray.400">Artist</Text>
                </Box>
                <Box width="40%"> <Player /> </Box>
            </Flex>
        </Box>
    )
}

export default PlayerBar;