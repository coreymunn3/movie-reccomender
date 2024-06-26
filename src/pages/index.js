import db from "@/db";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MoviePoster from "@/components/MoviePoster/MoviePoster";

export default function Home(props) {
  const { movies } = props;
  console.log(movies);
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} gap={6}>
      {movies.map((movie) => (
        <Box
          w="100%"
          h="100%"
          color="black"
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
}

export const getServerSideProps = async () => {
  const moviesColl = db.collection("movies");
  const movies = await moviesColl.find({}).toArray();
  return { props: { movies } };
};
