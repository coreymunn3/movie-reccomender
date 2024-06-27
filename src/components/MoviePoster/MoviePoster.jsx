import React from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

const MoviePoster = (props) => {
  const { Title, Genre, Poster, Year, imdbID, ...movieProps } = props;
  return (
    <Box h="100%" p={"0.5rem"}>
      <Image
        src={Poster}
        alt={Title}
        width={300}
        height={300}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <Text color="white" as="b" fontSize={"sm"}>{`${Title} (${Year})`}</Text>
      <Text color="gray.200" fontSize={"sm"}>
        {Genre}
      </Text>
    </Box>
  );
};

export default MoviePoster;
