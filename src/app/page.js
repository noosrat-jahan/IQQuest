import Image from "next/image";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedQuiz from "./FeaturedQuiz";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <FeaturedQuiz></FeaturedQuiz>
    </div>
  );
}
