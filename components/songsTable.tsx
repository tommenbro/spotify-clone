import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tb, Th, IconButton, Tbody } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formatTime } from "../lib/formatters";

const SongTable = ({ songs }) => {
    return (
        <Box bg="transparent" color="white">
            <Box padding="20px" marginBottom="20px">
                <Box marginBottom="30px">
                    <IconButton 
                    icon={<BsFillPlayFill fontSize="30px" />} 
                    aria-label="play"
                    colorScheme="green"
                    size="lg"
                    isRound
                    />
                </Box>
                <Table variant="unstyled">
                    <Thead borderBottom="1px solid" borderRadius="15px" borderColor="rgba(255, 255, 255, 0.2)">
                        <Tr>
                            <Th>#</Th>
                            <Th>Title</Th>
                            <Th>Date Added</Th>
                            <Th>
                                <AiOutlineClockCircle />
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {songs.map((song, index) => (
                            <Tr sx={{
                                transition: "all .1s",
                                "&:hover": {
                                    bg: "rgba(255, 255, 255, 0.1)"
                                }
                            }} 
                            
                            key={song.id}
                            cursor="pointer"
                            >
                                <Td>
                                    {index + 1}
                                </Td>
                                <Td>
                                    {song.name}
                                </Td>
                                <Td>
                                    {formatDate(song.createdAt)}
                                </Td>
                                <Td>
                                    {formatTime(song.duration)}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    )
}

export default SongTable;