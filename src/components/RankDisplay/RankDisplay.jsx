import React from "react";
import { Box, Text } from "@chakra-ui/react";

const RankDisplay = (props) => {
  const { rank } = props;
  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      width={35}
      height={35}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={8}
      pl={8}
    >
      <Text as="i" color={"gray.100"} fontWeight={"bold"} fontSize={"72px"}>
        {rank}
      </Text>
    </Box>
  );
};

export default RankDisplay;
