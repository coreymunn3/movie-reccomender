import db from "@/db";
import MovieGrid from "@/components/MovieGrid/MovieGrid";

export default function Home(props) {
  const { movies } = props;

  return <MovieGrid movies={movies} />;
}

export const getServerSideProps = async () => {
  const moviesColl = db.collection("movies");
  const movies = await moviesColl.find({}).toArray();
  return { props: { movies } };
};
