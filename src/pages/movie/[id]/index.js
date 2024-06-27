import React from "react";
import Image from "next/image";
import db from "@/db";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import MoviePoster from "@/components/MoviePoster/MoviePoster";
import { notFound } from "next/navigation";

export default function MoviePage(props) {
  console.log(props);
  const { movie, similarMovies } = props;

  return (
    <React.Fragment>
      <Stack direction={"row"} spacing={2}>
        <Box padding={"1rem"}>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={600}
            height={600}
            style={{ borderRadius: "4px" }}
          />
        </Box>
        <Stack direction="column" spacing={1} color="white">
          <Text fontSize={"xxx-large"} fontWeight={"bold"}>
            {movie.Title}
          </Text>
          <Text color={"gray.300"} fontSize={"small"}>
            {movie.Genre}
          </Text>
          <Text>{movie.$vectorize}</Text>
          <br></br>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              Directed By:{" "}
            </Text>
            <Text>{movie.Director}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              Featuring:{" "}
            </Text>
            <Text>{movie.Actors}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              Box Office:{" "}
            </Text>
            <Text>{movie.BoxOffice}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              Released:{" "}
            </Text>
            <Text>{movie.Released}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              RunTime:{" "}
            </Text>
            <Text>{movie.Runtime}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              Rated:{" "}
            </Text>
            <Text>{movie.Rated}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              IMDB Rating:{" "}
            </Text>
            <Text>{movie.imdbRating}</Text>
          </Flex>

          <Flex direction={"row"}>
            <Text marginRight={2} fontWeight={"bold"}>
              Language:{" "}
            </Text>
            <Text>{movie.Language}</Text>
          </Flex>
        </Stack>
      </Stack>
      <Box padding={"1rem"}>
        <Text
          fontSize={"x-large"}
          fontWeight={"bold"}
          color={"white"}
          marginBottom={"1rem"}
        >
          Similar Films you may like
        </Text>
        <Box position={"relative"} width="100%" overflow={"hidden"}>
          <Stack
            spacing={8}
            direction={"row"}
            overflow={"auto"}
            width={"100%"}
            p={"2rem"}
            _after={{
              content: '""',
              position: "absolute",
              zIndex: 2,
              right: 0,
              top: 0,
              bottom: 0,
              pointerEvents: "none",
              width: "10%",
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0), black 95%)",
            }}
          >
            {similarMovies.map((movie) => (
              <MoviePoster {...movie} />
            ))}
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const moviesColl = db.collection("movies");
  let props = {};
  // find the movie based on id
  const search = await moviesColl.find(
    { $and: [{ _id: context.query.id }] },
    {
      projection: {
        $vector: 1,
        $vectorize: 1,
      },
    }
  );
  // handle if not found
  if (!(await search.hasNext())) {
    return notFound();
  }
  // next, get similar movies based on vector
  const movie = await search.next();
  props["movie"] = movie;
  const similarMovies = await moviesColl
    .find(
      {},
      {
        sort: {
          $vector: movie.$vector,
        },
        // sort: {
        //   $vector:
        // }
        limit: 6,
        includeSimilarity: true,
      }
    )
    .toArray();

  props["similarMovies"] = similarMovies.filter((m) => m.$similarity < 1);

  return {
    props,
  };
};
