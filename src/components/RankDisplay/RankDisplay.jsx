import React from "react";
import { Box, Text } from "@chakra-ui/react";

const RankDisplay = (props) => {
  const { rank } = props;
  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      backgroundColor={"blue.400"}
      width={35}
      height={35}
      borderRadius={"50px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text color={"white"} fontWeight={"bold"} fontSize={"large"}>
        {rank}
      </Text>
    </Box>
  );
};

export default RankDisplay;
