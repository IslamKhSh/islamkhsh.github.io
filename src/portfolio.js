/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Islam Khaled",
  title: "Hi all, I'm Islam",
  subTitle: emoji(
    "A passionate Android Software Engineer 🚀 having an experience of building Android apps with Java / Kotlin / Compose / KMP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IslamKhSh",
  linkedin: "https://www.linkedin.com/in/islamkhsh/",
  gmail: "islam.khaled50@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Android Software Engineer obsessed with building innovative, scalable, and high-performance apps!",
  skills: [
    emoji(
      "⚡ Craft high-performance, scalable Android apps with Jetpack Compose, Kotlin, and Clean Architecture."
    ),
    emoji("⚡ Build cross-platform experiences with Kotlin Multiplatform (KMP) for Android, iOS, and beyond."),
    emoji(
      "⚡ Seamlessly integrate Firebase, AWS, GraphQL, and REST APIs for powerful, data-driven applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-k"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Electronic Engineering - Menoufia University",
      logo: require("./assets/images/fee.jpg"),
      subHeader: "Bachelor's degree in Computer Science and Engineering",
      duration: "Sep 2012 - May 2017",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kotlin",
      progressPercentage: "90%"
    },
    {
      Stack: "Java",
      progressPercentage: "75%"
    },
    {
      Stack: "KMP",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
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
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Projects"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Careem Super App",
      subtitle:
        "The first multi-service app in the region, revolutionizing mobility, delivery, and payments with +50M downloads across MENA & Pakistan",
      image: require("./assets/images/careem.webp"),
      imageAlt: "Careem Logo",
      link: "https://play.google.com/store/apps/details?id=com.careem.acma",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "KMP",
        "MVI",
        "Clean Arch"
      ]
    },
    {
      title: "Careem Captain",
      subtitle:
        "Empowering +5M Captains across MENA & Pakistan, transforming mobility, delivery, and earnings with flexibility and ease",
      image: require("./assets/images/careemCaptain.webp"),
      imageAlt: "Careem Captain Logo",
      link: "https://play.google.com/store/apps/details?id=com.careem.adma",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "XML",
        "Clean Arch"
      ]
    },
    {
      title: "Vezeeta",
      subtitle:
        "A leading digital healthcare platform with +5M downloads, connecting patients with top doctors, clinics, and pharmacies across MENA",
      image: require("./assets/images/vezeeta.webp"),
      imageAlt: "Vezeeta Logo",
      link: "https://play.google.com/store/apps/details?id=com.ionicframework.vezeetapatientsmobile694843",
      techStack: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "XML",
        "MVVM",
        "Hilt"
      ]
    },
    {
      title: "Vezeeta Doctors",
      subtitle:
        "Empowering thousands of doctors with seamless appointment management, teleconsultations, and patient engagement",
      image: require("./assets/images/vezeetaDoctors.webp"),
      imageAlt: "Vezeeta Doctors Logo",
      link: "https://play.google.com/store/apps/details?id=com.drbridge.Doctors",
      techStack: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "XML",
        "MVVM",
        "Hilt"
      ]
    },
    {
      title: "fanZ",
      subtitle:
        "Connecting +1M of football fans with live scores, fantasy leagues, and exclusive content, transforming the fan experience across the region",
      image: require("./assets/images/fanz.webp"),
      imageAlt: "fanZ Logo",
      link: "https://play.google.com/store/apps/details?id=com.fanzapp",
      techStack: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "XML",
        "MVI",
        "MVP",
        "Hilt"
      ]
    },
    {
      title: "Seoudi Supermarket",
      subtitle:
        "With +500K downloads, app bringing seamless grocery shopping to thousands of customers with fast delivery, exclusive deals, and a wide range of fresh products—all at your fingertips",
      image: require("./assets/images/seoudi.webp"),
      imageAlt: "Seoudi Logo",
      link: "https://play.google.com/store/apps/details?id=com.seoudi.app",
      techStack: [
        "Kotlin",
        "XML",
        "MVVM",
        "GraphQl",
        "Hilt"
      ]
    },
    {
      title: "Elaraby",
      subtitle:
        "With +250K downloads, El Araby app offers a seamless shopping experience for electronics and home appliances, featuring exclusive deals, fast delivery, and trusted quality",
      image: require("./assets/images/elaraby.webp"),
      imageAlt: "Elaraby Logo",
      link: "https://play.google.com/store/apps/details?id=com.elaraby.store",
      techStack: [
        "Kotlin",
        "XML",
        "MVVM",
        "GraphQl"
      ]
    },
    {
      title: "Jameel",
      subtitle:
        "With +200K downloads on Android, Jameel app redefines mobility with reliable ride-hailing, enhanced safety features, and seamless booking across the region",
      image: require("./assets/images/jameel.webp"),
      imageAlt: "Jameel Logo",
      link: "https://play.google.com/store/apps/details?id=com.jameel.rider.prod",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "MVI",
        "Socket"
      ]
    },
    {
      title: "Jameel Captain",
      subtitle:
        "Empowering +25K Captains across MENA & Pakistan, Jameel Captain app offers flexible earning opportunities, enhanced safety features, and seamless ride management",
      image: require("./assets/images/jameelCaptain.webp"),
      imageAlt: "Jameel Captain Logo",
      link: "https://play.google.com/store/apps/details?id=com.jameel.captain.prod",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "MVI",
        "Socket"
      ]
    },
    {
      title: "BeFit 360",
      subtitle:
        "With +20K downloads, BeFit 360 offers a seamless fitness experience, providing easy access to training schedules, flexible payment options, and session tracking to help you achieve your health goals",
      image: require("./assets/images/befit.webp"),
      imageAlt: "BeFit Logo",
      link: "https://play.google.com/store/apps/details?id=com.robusta.befit",
      techStack: [
        "Kotlin",
        "Java",
        "XML",
        "MVP"
      ]
    },
    {
      title: "myTawasol - Union Coop",
      subtitle:
        "HR management for Union Coop +2K employees, offering features like QR code-based attendance tracking, and leave management",
      image: require("./assets/images/myTawasol.webp"),
      imageAlt: "myTawasol Logo",
      link: "https://play.google.com/store/apps/details?id=com.hr.unioncoop",
      techStack: [
        "Kotlin",
        "XML",
        "MVVM"
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
    "",
  number: "+20-01003738093",
  email_address: "islam.khaled50@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
