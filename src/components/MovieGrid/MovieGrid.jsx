import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MoviePoster from "@/components/MoviePoster/MoviePoster";
import RankDisplay from "../RankDisplay/RankDisplay";

const MovieGrid = (props) => {
  const { movies, showRank } = props;
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} gap={6}>
      {movies.map((movie, index) => (
        <Box
          w="100%"
          h="100%"
          key={movie._id}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          position={"relative"}
        >
          {showRank && <RankDisplay rank={index + 1} />}
          <MoviePoster {...movie} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
