import Image from "next/image";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedQuiz from "./FeaturedQuiz";
import Leaderboard from "./Leaderboard";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <Category></Category>
      <FeaturedQuiz></FeaturedQuiz>
      <Leaderboard></Leaderboard>
    </div>
  );
}
