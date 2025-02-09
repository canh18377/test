import { Button } from "@/components/ui/button";
import Carousel from "@/components/molecule/carousel";
import Link from "next/link";
import { T___Gig } from "./types";
import FadeInOnScroll from "@/components/anims/fadein-onscroll";

const GigCard = ({ item }: { item: T___Gig }) => {
  return (
    <div className="w-[300px] group">
      <FadeInOnScroll>
        <Carousel images={item.thumbnails} />
        <div className="flex flex-col items-start justify-start gap-4 pt-4">
          <Link href={`/checkout?id=${item._id}`}>
            <h4 className="font-medium hover:underline cursor-pointer">
              {item.title}
            </h4>
          </Link>
          <p>
            <span className="text-gray-400">Starting from</span> US$15
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline">Buy on Fiverr</Button>
            <Link href={`/checkout?id=${item._id}`}>
              <Button>Buy Now</Button>
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default GigCard;
