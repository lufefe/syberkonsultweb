import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../utils/blogUtils";
import { motion } from "framer-motion";
import RichText from "../components/RichText";
import ProgressBar from "../components/design/ProgressBar";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const [loading, setLoading] = useState(true);

  const [singleBlogPost, setSingleBlogPost] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getPostById = async () => {
      try {
        await client
          .getEntries({ content_type: "post", "fields.slug": id })
          .then((response) => {
            setSingleBlogPost(response.items?.[0]);
            setLoading(false);
          });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getPostById();
  }, [id]);

  return (
    <>
       <Helmet>
      <title>{`SyberBlog | ${singleBlogPost?.fields?.title}`}</title>
      <meta name="description" content={`SyberBlog | ${singleBlogPost?.fields?.title}`}/>
      <link rel="canonical" href={`/${singleBlogPost?.fields?.slug}`} />
    </Helmet>
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased"
    >
      <ProgressBar />

      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {/* <Link to="/blog" className="max-w-lg text-2xl font-bold md:text-5xl">
            Blog Posts
          </Link> */}
          {loading ? (
            <BlogDetailSkeleton />
          ) : (
            <>
              <header className="pmb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src={
                        singleBlogPost?.fields?.author.fields.authorImage
                          ?.fields?.file?.url
                      }
                      alt={singleBlogPost?.fields?.author.fields.name}
                    />
                    <div>
                      <p className="text-lg">
                        {singleBlogPost?.fields?.author.fields.name}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {singleBlogPost?.fields?.author.fields.designation}
                      </p>

                      <p className="text-base italic text-gray-500 dark:text-gray-400">
                        {singleBlogPost?.fields?.date === undefined
                          ? "Loading"
                          : new Intl.DateTimeFormat("en-GB", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            }).format(new Date(singleBlogPost?.fields?.date))}
                      </p>
                    </div>
                  </div>
                </address>
                <span className="bg-gray-100 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-800 dark:text-gray-300 border border-gray-500 hover:cursor-pointer">
                  <svg
                    className="w-5 h-5 me-1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Interface / Label">
                        {" "}
                        <path
                          id="Vector"
                          d="M19.2933 9.95137L16.96 7.15137C16.6073 6.72814 16.43 6.51639 16.2139 6.36426C16.0223 6.22946 15.8084 6.12953 15.5822 6.06868C15.327 6 15.0523 6 14.5014 6H7.2002C6.08009 6 5.51962 6 5.0918 6.21799C4.71547 6.40973 4.40973 6.71547 4.21799 7.0918C4 7.51962 4 8.08009 4 9.2002V14.8002C4 15.9203 4 16.4801 4.21799 16.9079C4.40973 17.2842 4.71547 17.5905 5.0918 17.7822C5.5192 18 6.07899 18 7.19691 18H14.5014C15.0523 18 15.327 17.9998 15.5822 17.9312C15.8084 17.8703 16.0223 17.7702 16.2139 17.6354C16.43 17.4833 16.6073 17.2721 16.96 16.8488L19.2933 14.0488C19.9006 13.32 20.2036 12.9556 20.3197 12.5488C20.422 12.1902 20.422 11.8095 20.3197 11.4509C20.2036 11.0441 19.9006 10.6801 19.2933 9.95137Z"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  {singleBlogPost?.fields?.category}
                </span>
                <h2 className="h2 pt-3">{singleBlogPost?.fields?.title}</h2>
              </header>

              <div className="flex justify-center items-center">
                <img
                  src={singleBlogPost?.fields?.coverImage?.fields?.file?.url}
                  alt={singleBlogPost?.fields?.title}
                  // width="578"
                  // height="291"
                  className="rounded-md"
                />
              </div>
              <div className="mt-4">
                <RichText content={singleBlogPost?.fields?.content} />
              </div>
              <Link
                to="/blog"
                className="flex items-center w-fit justify-center px-3 mt-8 h-8 me-3 text-sm font-medium text-gray-100 bg-white border border-white rounded-lg hover:bg-gray-100 hover:text-gray-100 dark:bg-purple-700 dark:border-gray-400 dark:text-white dark:hover:bg-purple-800 dark:hover:text-white"
              >
                <svg
                  className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Back
              </Link>
            </>
          )}
        </article>
      </div>
    </motion.main>
    </>
  );
};

export default BlogDetail;

function BlogDetailSkeleton() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[400px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[440px]">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[360px]">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
