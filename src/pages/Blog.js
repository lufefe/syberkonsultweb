import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client } from "../utils/blogUtils";

const Blog = () => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        await client.getEntries({ content_type: "post" }).then((response) => {
          setBlogPosts(response.items);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllPosts();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative p-4"
    >
      <div className="relative max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="flex">
          <h2 className="h2 mx-5 font-bold ">Blog Posts</h2>
        </div>

        <div className="mt-2 sm:-mr-8 flex flex-wrap">
          {blogPosts.map((post) => (
            <div
              key={post.sys.id}
              className={`mt-10 sm:pr-8 w-full ${
                post.fields.featured ? "w-full!" : " sm:w-1/2 lg:w-1/3 "
              }`}
            >
              <Link to={`/blogdetail/${post.fields.slug}`}>
                <div
                  className={`group cursor-pointer flex bg-gray-100 rounded-lg ${
                    post.fields.featured
                      ? "sm:flex-row! h-full sm:pr-4"
                      : "flex-col"
                  }`}
                >
                  <div
                    style={{
                      backgroundImage: `url('${post.fields.coverImage.fields.file.url}')`,
                    }}
                    className={`w-full bg-hero bg-no-repeat bg-cover bg-center rounded-t-lg ${
                      post.fields.featured
                        ? "sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg"
                        : "h-64"
                    }`}
                  ></div>
                  <div
                    className={`p-8 border-2 border-t-0 rounded-lg rounded-t-none ${
                      post.fields.featured
                        ? "sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0"
                        : ""
                    }`}
                  >
                    <div className="uppercase text-primary-500 text-xs font-bold text-n-8 tracking-widest leading-loose after:content after:block after:border-b-2 after:border-purple-900 after:w-8">
                      {post.fields.category}
                    </div>
                    <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(post.fields.date))}
                    </div>
                    <div className="mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300">
                      {post.fields.title}
                    </div>
                    {post.fields.featured && post.fields.excerpt && (
                      <div
                        className={`text-n-8 ${
                          post.fields.featured
                            ? "text-sm mt-3 leading-loose text-gray-600 font-medium"
                            : ""
                        }`}
                      >
                        {post.fields.excerpt}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {visible < blogPosts.length && (
          <div className="flex justify-center py-8">
            <button
              className="px-8 py-3 font-bold rounded bg-purple-800 text-gray-100 hocus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none hover:bg-purple-600 transition duration-300"
              onClick={onLoadMoreClick}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Blog;
