import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { client } from "../utils/blogUtils";

const FeedBlog = () => {
  const [width, setWidth] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

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
    <Section id="feedblog" crosses >
      <h4 className="h4 text-center mb-8">Latest Blog Posts</h4>
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden mx-11"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex"
        >
          {blogPosts.map((post) => {
            return (
              <motion.div key={post.sys.id} className="min-h-96 min-w-[30rem] p-3">
                <motion.a
                  href={`/blogdetail/${post.fields.slug}`}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="block rounded-lg bg-cover p-6 shadow-lg dark:bg-neutral-700 bg-blend-overlay bg-no-repeat bg-center"
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
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default FeedBlog;
