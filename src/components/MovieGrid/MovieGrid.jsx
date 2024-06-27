import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MoviePoster from "@/components/MoviePoster/MoviePoster";

const MovieGrid = (props) => {
  const { movies } = props;
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} gap={6}>
      {movies.map((movie) => (
        <Box
          w="100%"
          h="100%"
          key={movie._id}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <MoviePoster {...movie} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
