import Course from "@/components/Course";
import { featured, lessons, faykQuips } from "@/data/phrases";

export default function Home() {
  return <Course featured={featured} lessons={lessons} quips={faykQuips} />;
}
