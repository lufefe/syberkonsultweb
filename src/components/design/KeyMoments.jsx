import React from 'react'
import OurStory from '../../pages';

const KeyMoments = () => {
    const projects = [
        {
          title1: "Jomor",
          title2: "Design",
          src: "jomor_design.jpeg"
        },
        {
          title1: "La",
          title2: "Grange",
          src: "la_grange.jpeg"
        },
        {
          title1: "Deux Huit",
          title2: "Huit",
          src: "deux_huit_huit.jpeg"
        },
        {
          title1: "Nothing",
          title2: "Design Studio",
          src: "nothing_design_studio.png"
        },
        {
          title1: "Mambo",
          title2: "Mambo",
          src: "mambo_mambo.jpeg"
        }
      ]
    
  return (
    <main className="h-[100vh] flex items-center justify-center">
    <div className="w-[70%]">
      <p>Featured Work</p>
        {
          projects.map( project => {
            return <OurStory project={project}/>
          })
        }
    </div>
  </main>
  )
}

export default KeyMoments