/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import 'font-awesome/css/font-awesome.min.css';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Shalom",
  title: "Hi There, I'm",
  name: "Shalom Igiraneza",
  subTitle: emoji(
    "A passionate Full Stack Junior Web and applications Developer with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  lik: "I LIKE TO MAKE PRETTY THINGS.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
  //display: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NezaShalom",
  gmail: "igishalom672@gmail.com",
  twitter: "https://twitter.com/IG_Charm",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Stacks",
  subTitlef:
    "FRONTEND & MOBILE",
    subTitleb:
    "BACKEND",
    subTitled:
    "DATABASE",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / MongoDB"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkillsf: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fa fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fa fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fa fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fa fa-react",
    },
  ],
  softwareSkillsb: [
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fa fa-node",
    },
  ],
  softwareSkillsd: [
    {
      skillName: "firebase",
      fontAwesomeClassname: "fa fa-fire",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-database",
    },
  ],
  
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ispahani Public School & College",
      logo: require("./assets/images/ispahaniLogo.png"),
      subHeader: "Completed Primary Education",
      duration: "January 2017 - December 2019",
    },
    {
      schoolName: "Govt Muslim High School",
      logo: require("./assets/images/gmhsLogo.png"),
      subHeader: "Currently Studying",
      duration: "January 2020 - Running",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student",
      company: "Programming Hero",
      companylogo: require("./assets/images/pHero.png"),
      date: "January 2021 – Present",
      desc:
        "Learning Code from Programming Hero...Mission of Become a Junior Developer",
    },
    {
      role: "Wordpress Developer",
      company: "Bazar Niketon",
      companylogo: require("./assets/images/bnLogo.png"),
      date: "July 2020 – Present",
      desc:
        "I developed the whole website of Bazar Niketon using Wordpress. My Job is To Develop and Manage the Website",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "a simple Hi! Can kickstart The journey, Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+250 780444925",
  email_address: "shalomneza1@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
