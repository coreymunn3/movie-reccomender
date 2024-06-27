import React from "react";
import db from "@/db";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MovieGrid from "@/components/MovieGrid/MovieGrid";

export default function Search(props) {
  const { movies } = props;
  console.log(movies);
  const router = useRouter();

  return (
    <React.Fragment>
      <Text align={"center"} color="white" marginY={"2rem"}>
        Suggest results based on your search
      </Text>
      <MovieGrid movies={movies} showRank={true} />
    </React.Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const moviesColl = db.collection("movies");
  const similarMovies = await moviesColl
    .find(
      {},
      {
        sort: {
          $vectorize: context.query.term,
        },
        limit: 10,
      }
    )
    .toArray();

  return {
    props: {
      movies: similarMovies,
    },
  };
};
