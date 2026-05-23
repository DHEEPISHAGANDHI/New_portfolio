/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Rename to your file name for custom animation
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dheepisha G",
  title: "Hi, I'm Dheepisha",
  subTitle: emoji(    
    "Enthusiastic Full-Stack Developer with experience building secure, user-friendly web applications. Skilled in both frontend and backend development, having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IjXwmNPbxFq9h2vxfQaqD7kSqwosqLb4/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DHEEPISHAGANDHI",
  linkedin: "https://www.linkedin.com/in/dheepisha-g-410294293/",
  gmail: "gdheepisha@gmail.com",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop full-stack  with ReactJS, JavaScript, Node.js, and databases"
    ),
    emoji("⚡ Build AI-driven applications using LLMs, LangChain, and real-world use cases"),
    emoji(
      "⚡ REST API integration, authentication, and scalable backend design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
   
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
   
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
     {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cluny Matriculation Higher Secondary School",
      logo: require("./assets/images/cluny.png"),
      subHeader: "Bio-Mathematics Major",
      duration: "June 2021 - April 2023",
      
    },
    {
      schoolName: "Kongu Engineering College",
      logo: require("./assets/images/KEC.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2023 - Present",
  
    }
  ]
};
// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  // display: true, //Set it to true to show workExperiences Section
  // experience: [
  //   {
  //     role: "Software Engineer",
  //     company: "Facebook",
  //     companylogo: require("./assets/images/facebookLogo.png"),
  //     date: "June 2018 – Present",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //     ]
  //   },
  //   {
  //     role: "Front-End Developer",
  //     company: "Quora",
  //     companylogo: require("./assets/images/quoraLogo.png"),
  //     date: "May 2017 – May 2018",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   },
  //   {
  //     role: "Software Engineer Intern",
  //     company: "Airbnb",
  //     companylogo: require("./assets/images/airbnbLogo.png"),
  //     date: "Jan 2015 – Sep 2015",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   }
  // ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME OF MY PROJECTS THAT I HAVE WORKED ON THAT MADE A DIFFERENCE",
  projects: [
    {
      image: require("./assets/images/car1.webp"),
      projectName: "Car Rental System",
      projectDesc: "Built a secure car rental system with optimized database design and responsive UI, improving booking efficiency and enabling smooth real-time data handling through structured workflows and input validation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://car-rental-system-1-4yed.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    }, 
    {
      image: require("./assets/images/aibot.jpeg"),
      projectName: "Legal AI Assistant",
      projectDesc: "Developed an AI-powered legal assistant using RAG to deliver context-aware legal insights. Optimized query retrieval and integrated secure backend APIs to enhance system performance and reliability.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/DHEEPISHAGANDHI/legalai_bot"
        }
      ]
    },
    {
      image: require("./assets/images/et.webp"),
      projectName: "Telegram expense tracker bot",
      projectDesc: "A telegram bot that helps users track their expenses by categorizing and summarizing them.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/drive/folders/1XSXa81fx8SgkQB9KUGLp34Y5FRAJvsLz"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      image: require("./assets/images/certi.png"),
      projectName: "Certificate Generator",
      projectDesc: "An n8n automation workflow that generates personalized certificates using user data from Google Sheets and sends them via email.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/drive/folders/1XI5hG-1o7w2ctHzXCQNkjIKx_yE4aR0y"
        }
        //  you can add extra buttons here.
      ]
    },
     {
      image: require("./assets/images/ainews.png"),
      projectName: "News Curator Platform",
      projectDesc: "Developed a full-stack news aggregation platform integrating external APIs to filter and deliver personalized content, improving user engagement through dynamic search and modular UI components.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ai-news-curator-1.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sekar.png"),
      projectName: "Furniture E-Commerce Platform",
      projectDesc: "Developed and deployed a full-stack furniture e-commerce platform for a real client with responsive UI, dynamic product management, authentication, and admin dashboard functionalities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sekar-industries-3.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1st Position in Vibathon",
      subtitle:
        "Secured 1st Position among 500+ participants in Vibathon by KSR college of Engineering for LegalAI bot.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1zNfxRvd6TBDku-j1eqRmhuF_n3SOVjkB/view?usp=drive_link"
        },
       
      ]
    },
    {
      title: "1st position in SIH Internal Hackathon",
      subtitle:
        "Secured 1st position in SIH Internal Hackathon at Kongu Engineering College.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1k_UoCkPUa6UjQIaNgbOEKxaoGFBh-Byv/view?usp=drive_link"
        }
      ]
    },
    {
      title: "1st position in Code Camp hackathon",
      subtitle:
        "Secured 1st position in Code Camp conducted by Freelancers Club.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1IjXwmNPbxFq9h2vxfQaqD7kSqwosqLb4/view?usp=drive_link"
        }
      ]
    },
    {
      title: "1st position in Proof of Concept hackathon",
      subtitle:
        "Secured 1st position in Proof of Concept hackathon at Kongu Engineering College.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1_gXwtAw6JkJiic0mz-jsOnHqrUjhDLqd/view?usp=drive_link"
        }
      ]
    },
    {
      title: "2nd position in Algo Battle Coding Contest",
      subtitle:
        "Secured 2nd position in Algo Battle Coding Contest at Kongu Engineering College.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1bKAwJO4eDL1iirKrM5nZRyp_Opfp3-SW/view?usp=drive_link"
        }
      ]
    },
    {
      title: "1st position in a Paper Presentation",
      subtitle:
        "Secured 1st position in a Paper Presentation on World Science day at Kongu Engineering College.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1G398uiOvkfCQglCkbkiB9ugIq2PbO5fx/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Certifications Section

const certificationSection = {
  title: emoji("Certifications 📜"),
  subtitle: "My certifications and completed courses",

  certificationCards: [
    {
      title: "MongoDB Associate Developer",
      subtitle: "Completed the MongoDB Associate Developer Certification",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1AhC97RZxaiQt7C37ePtOtJWRCrFQqeyE/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Oracle Apex Cloud Developer Certified Professional",
      subtitle: "Completed the Oracle Apex Cloud Developer Certified Professional Certification",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1wUEJmS8wVabTTZzLzfQInG6sVmbS0Rd-/view?usp=drive_link"
        }
      ]
    }
    ,
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      subtitle: "Completed the Oracle Certified Professional: Java SE 17 Developer under Oracle",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Oracle Java Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/197ifzVAU_mSujSRwSDAm7KCE4knINi1T/view?usp=drivesdk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "gdheepisha@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  certificationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
