import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../utils/blogUtils";
import { motion } from "framer-motion";
import RichText from "../components/RichText"

const BlogDetail = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getPostById = async () => {
      try {
        await client
          .getEntries({ content_type: "post", "fields.slug": id })
          .then((response) => {
            console.log("response", response.items?.[0]);
            setSingleBlogPost(response.items?.[0]);
          });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getPostById();
  }, [id]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-7xl px-4 py-12 items-center w-full"
    >
      <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:items-end md:px-8">
          <div className="posts">
            <Link
              to="/blog"
              className="max-w-lg text-2xl font-bold md:text-5xl"
            >
              Blog Posts
            </Link>

            <section className="py-8">
              <header className="relative">
                <img
                  src={singleBlogPost?.fields?.coverImage?.fields?.file?.url}
                  alt={singleBlogPost?.fields?.title}
                  width="578"
                  height="291"
                  className="relative"
                />
                <h2 className="h2 pt-3">{singleBlogPost?.fields?.title}</h2>
                <p className="font-light relative">
                  <span className="flex">
                    {/* //todo: author picture */}
                    {singleBlogPost?.fields?.author.fields.name}
                  </span>
                  <span className="font-light italic">
                    {/* //todo: date/calendar icon */}

                    {singleBlogPost?.fields?.date === undefined
                      ? "Loading"
                      : new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(new Date(singleBlogPost?.fields?.date))}
                  </span>
                </p>
              </header>
              <div>
                <RichText  content={singleBlogPost?.fields?.content} />
              </div>
            </section>
          </div>
      </div>
    </motion.section>
  );
};

export default BlogDetail;
