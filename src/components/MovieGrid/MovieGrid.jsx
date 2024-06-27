import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MoviePoster from "@/components/MoviePoster/MoviePoster";

const MovieGrid = (props) => {
  const { movies, showRank } = props;
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} gap={6}>
      {movies.map((movie, index) => {
        const rank = showRank ? index + 1 : undefined;
        return (
          <Box
            w="100%"
            h="100%"
            key={movie._id}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <MoviePoster {...movie} rank={rank} />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default MovieGrid;
