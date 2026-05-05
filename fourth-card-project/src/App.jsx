import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://imgs.search.brave.com/sEVAqcZOgcVNA49r860w7_t35uDx0l9vcWK6KghGnV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Mumbai , INDIA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      companyName: "Tesla",
      datePosted: "1 day ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$88/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "1 week ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hour",
      location: "Armonk, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      companyName: "Oracle",
      datePosted: "5 days ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
      companyName: "Adobe",
      datePosted: "3 days ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$68/hour",
      location: "San Jose, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/FCgn1KoetBgueqic0QYJut2MpbPD6U0j3Kr9Qu-idAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWluc3RhZ3JhbS1p/Y29uLXN2Zy1kb3du/bG9hZC1wbmctNzU3/NDM5OS5wbmc_Zj13/ZWJwJnc9MTI4",
      companyName: "Instagram",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/YOKgt2ckhoWxB9wojQ9_ynl4NNZDIF49HPpUItAWNgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20veHUxcVUv/TUFHek5teHUxcVUv/MS90bC9jYW52YS13/aGF0c2FwcC1sb2dv/LU1BR3pObXh1MXFV/LnBuZw",
      companyName: "WhatsApp",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hour",
      location: "Remote"
    }
  ];
  return (
    <div className="parent">
      {
        jobOpenings.map(function (elem, idx) {
          return <div key={idx}>
            <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location={elem.location} />
          </div>
        })
      }
    </div>
  )
}

export default App
