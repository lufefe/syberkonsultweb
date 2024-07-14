import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import {client} from '../utils/blogUtils'

const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        const getAllPosts = async () => {
            try{
                const response = await client.getEntries({ content_type: 'post' })
                setBlogPosts(response.items)
            }catch (error) {
                console.log(`Error fetching authors ${error}`);
              }
              
        };
        getAllPosts()
    },[])
  return (
    <div id="layout" className="pure-g ">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead h3">Web Dev Blog</h1>
            {blogPosts.map(post => (
              <section className="post" key={post.sys.id}>
                {console.log("post", post.fields.title)}

                <header className="post-header">
                  <img src={post.fields.coverImage.fields.file.url} alt={post.fields.title} width="578" height="291" />
                  <h2 className="post-title pt-3">{post.fields.title}</h2>
                  <p className="post-meta">
                    By <a href="https://thecodeangle.com/" className="post-author">{post.fields.author.fields.name}</a> Date <span></span>
                    <small>
                      {new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(new Date(post.fields.date))}
                    </small>
                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.excerpt}
                  </p>
                  <Link
                    to={`/blogDetails/${post.fields.slug}`}
                    className="button button1">
                    Read More
                  </Link>
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogList



