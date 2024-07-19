import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client } from "../utils/blogUtils";

const Blog = () => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  const [loading, setLoading] = useState(true);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        await client
          .getEntries({
            content_type: "post",
            order: ["-fields.featured", "-fields.date"],
          })
          .then((response) => {
            setBlogPosts(response.items);
            setLoading(false)
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
        {loading ? <BlogPostsSkeleton />:
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
}
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

      {/* //todo - implement newsletter */}
      {/* <div id="newsletter-banner" tabindex="-1" className="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div className="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
        <form className="flex flex-col items-center w-full md:flex-row">
            <label for="email" className="flex-shrink-0 mb-2 me-auto text-sm font-medium text-gray-500 md:mb-0 md:me-4 dark:text-gray-400 md:m-0">Sign up for our newsletter</label>
            <input type="email" id="email" placeholder="Enter your email" className="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:me-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
        </form>
    </div>
    <div className="flex items-center absolute top-2.5 end-2.5 md:relative md:top-auto md:end-auto">
        <button data-dismiss-target="#newsletter-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close banner</span>
        </button>
    </div>
</div> */}
    </motion.div>
  );
};

export default Blog;

function BlogPostsSkeleton() {
  return (
    <div
      role="status"
      className="mt-12 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
