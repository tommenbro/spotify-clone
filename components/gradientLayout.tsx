import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const GradientLayout = ({
    color,
    children,
    image,
    subtitle,
    title,
    description,
    roundImage
}) => {
    return (
        <Box 
        height="100%"
        overflowY="auto" 
        bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`} 
        >
            <Flex bgGradient={`linear(${color}.400 0%, ${color}.600 100%)`} padding="40px" align="end">
                <Box padding="20px">
                    <Image 
                    boxSize="160px" 
                    boxShadow="2xl" 
                    src={image} 
                    borderRadius={roundImage ? '100%' : "3px"} />
                </Box>
                <Box padding="20px"  lineHeight="40px" color="white">
                    <Text fontSize="small" fontWeight="600" paddingBottom="5px" casing="uppercase">{subtitle}</Text>
                    <Text fontSize="7xl" fontWeight="bold" paddingBottom="20px">{title}</Text>
                    <Text fontSize="16px" fontWeight="400">{description}</Text>
                </Box>
            </Flex>
            <Box paddingY="50px">{children}</Box>
        </Box>
    )

}

export default GradientLayout;