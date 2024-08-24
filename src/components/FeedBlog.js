import { motion} from "framer-motion";
import { useEffect, useState } from "react";
import Section from "./Section";
import { client } from "../utils/blogUtils";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { BsDot } from "react-icons/bs";


const FeedBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        await client
          .getEntries({
            content_type: "post",
            order: ["-fields.featured", "-fields.date"],
          })
          .then((response) => {
            setBlogPosts(response.items.slice(0, 6));
          });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllPosts();
  }, []);

  return (
    <Section id="feedblog" crosses>
      <h4 className="h4 text-center mb-8">Latest Blog Posts</h4>

      <div className="relative flex flex-col items-center py-20">
        <div className="overflow-hidden w-[90rem] max-sm:w-[100vw]">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 383 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {blogPosts.map((post, index) => (
              <motion.div className="p-2 lg:min-w-[30rem] max-md:min-w-[28rem] max-sm:min-w-[24rem]" key={index}>
                {/* <img
                  src={image}
                  className="w-full h-full object-cover rounded"
                  alt="#"
                /> */}

                <motion.a
                  href={`/blogdetail/${post.fields.slug}`}
                  className="h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-md:flex-row max-md:max-w-xl max-sm:max-w-screen-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="h-full block rounded-lg bg-cover p-6 shadow-lg dark:bg-neutral-700 bg-blend-overlay bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url('${post.fields.coverImage.fields.file.url}')`,
                    }}
                  >
                    <h5 className="h5 mb-2 leading-tight text-white dark:text-neutral-50">
                      {post.fields.title}
                    </h5>
                    <p className="mb-4 text-base text-white  dark:text-neutral-200">
                      {post.fields.excerpt.slice(0,420)}...
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(post.fields.date))}
                    </p>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-row w-[80vw] justify-between mt-6 ">
          <button
            onClick={prevSlide}
            className="bg-gray-800 p-3 rounded-full shadow transition-all hover:opacity-70"
          >
            <HiOutlineArrowSmallLeft />
          </button>
          <div className="flex flex-row gap-1">
            {blogPosts.map((_, index) => (
              <BsDot
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`cursor-pointer text-2xl ${
                  index === currentIndex ? "text-gray-800" : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="bg-gray-800 p-3 rounded-full shadow transition-all hover:opacity-70"
          >
            <HiOutlineArrowSmallRight />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default FeedBlog;
