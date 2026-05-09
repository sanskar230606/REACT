import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
  {
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww",
    intro:
      "Creative fashion enthusiast exploring modern styling trends through photography, branding, design, culture, and visual storytelling.",
    tag: "satisfied",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    intro:
      "Passionate digital creator building unique experiences using creativity, confidence, innovation, collaboration, strategy, and artistic vision.",
    tag: "underserved",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww",
    intro:
      "Modern lifestyle influencer sharing inspiring content about beauty, fashion, travel, productivity, wellness, confidence, and personal growth.",
    tag: "underbanked",
  },
  {
    img: "https://images.unsplash.com/photo-1690444963408-9573a17a8058?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Dedicated entrepreneur creating impactful solutions through technology, leadership, communication, teamwork, research, and continuous learning daily.",
    tag: "satisfied",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8fDA%3D",
    intro:
      "Innovative thinker passionate about building scalable products combining creativity, business strategy, design principles, and technical expertise.",
    tag: "underbanked",
  },
];
  return (
    <div>
      <Section1 users={users} />
      {/* <Section2/> */}
    </div>
  )
}

export default App
