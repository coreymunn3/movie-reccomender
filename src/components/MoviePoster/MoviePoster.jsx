import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

const MoviePoster = (props) => {
  const { Title, Genre, Poster, Year, imdbID, ...movie } = props;
  return (
    <Link href={`/movie/${movie._id}`}>
      <Box h="100%">
        <Box
          _hover={{
            boxShadow: "10px 10px 20px rgba(36, 36, 36, 0.5)",
          }}
        >
          <Image
            src={Poster}
            alt={Title}
            width={300}
            height={300}
            style={{ width: "100%", borderRadius: "4px" }}
          />
        </Box>

        <Text color="white" as="b" fontSize={"sm"}>{`${Title} (${Year})`}</Text>
        <Text color="gray.200" fontSize={"sm"}>
          {Genre}
        </Text>
      </Box>
    </Link>
  );
};

export default MoviePoster;
