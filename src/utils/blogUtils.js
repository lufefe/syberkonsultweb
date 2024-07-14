const contentful = require('contentful')

export const client = contentful.createClient({
  space: "lmn1fhfh1b37",
  accessToken: "LTgLp0zEZ3Ogs8c9KdkdySQjvqzRAQVeZBXWfr0cMTo",
})

// export const previewClient = contentful.createClient({
//   host: 'preview.contentful.com',
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
// })

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = props => {
  return <img loader={contentfulLoader} {...props} alt='' />
}

export default ContentfulImage