import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SimilarityDisplay = (props) => {
  const { similarity } = props;
  return (
    <Box
      position={"absolute"}
      top={-5}
      left={-5}
      width={"50px"}
      height={"50px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      backgroundColor={"purple.500"}
      borderRadius={50}
    >
      <Text as="i" color={"gray.100"} fontWeight={"bold"}>
        {Number(similarity).toFixed(2) * 100}%
      </Text>
    </Box>
  );
};

export default SimilarityDisplay;
