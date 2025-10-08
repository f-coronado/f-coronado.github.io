/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import cppIcon from "./assets/images/cplusplus.svg";
import rosIcon from "./assets/images/ros.svg";
import numpyIcon from "./assets/images/numpy.svg";
import opencvIcon from "./assets/images/opencv.svg";
import pytorchIcon from "./assets/images/pytorch.svg";
import pickNplaceGIF from "./assets/images/pickNplace.gif";

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
  username: "f-coronado",
  title: "Hi, I'm Fabrizzio",
  subTitle: emoji(
    "I'm a software engineer at NASA with a background and passion for applying AI, computer vision and autonomous navigation to real-world robotic systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17mtZZifaAUJkxFy4PC35DYoMxMkepPbQ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/f-coronado",
  linkedin: "https://www.linkedin.com/in/fabrizzio-coronado/",
  gmail: "fabrizzio37@gmail.com",
  youtube: "https://www.youtube.com/@fabrizziocoronado7465",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  subTitle:
    "Software Engineer that wants to continue developing my expertise in robotics applications",
  skills: [
    emoji(
      "⚡ Develop and test scripts for JPSS weather satellites on simulator and actual satellites"
    ),
    emoji(
      "⚡ Run multiple-day long test events as flight director ensuring safe execution of test procedure"
    ),
    emoji(
      "⚡ Configure, troubleshoot and maintain multiple satellite simulators"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Redhat",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "Raspberry Pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      iconUrl: cppIcon
      // fontAwesomeClassname: ""
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ROS",
      iconUrl: rosIcon
    },
    {
      skillName: "Numpy",
      iconUrl: numpyIcon
    },
    {
      skillName: "OpenCV",
      iconUrl: opencvIcon
    },
    {
      skillName: "PyTorch",
      iconUrl: pytorchIcon
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland",
      logo: require("./assets/images/umd.png"),
      subHeader: "Master of Engineering in Robotics",
      duration: "August 2022 - December 2024",
      desc: "Graduated with a 3.47 GPA. Completed projects in autonomous mobile robots, swarms, Deep networks applications on optical flow"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of Maryland",
      logo: require("./assets/images/umd.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "January 2019 - May 2021",
      desc: "Graduated with a 3.59 GPA. Took courses in mechatronics, computer vision and 3D printing and was a teaching assistant"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Montgomery College",
      logo: require("./assets/images/MC.jpeg"),
      subHeader: "Associate of Science in Mechanical Engineering",
      duration: "August 2016 - December 2018",
      desc: "Graduated with a 3.8 GPA. Member of phi theta kappa"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Autonomous Navigation",
      progressPercentage: "90%"
    },
    {
      Stack: "Artificial Intelligence", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "NASA JPSS",
      companylogo: require("./assets/images/JPSS_Logo.png"),
      date: "July 2021 – Present",
      desc: "Software Engineer working on the integration, testing and early orbit operations team for JPSS weather satellites",
      descBullets: [
        "Provided simulator support for the JPSS-2/NOAA-21 weather satellite prior to and during its launch and early orbit campaign in November 2022",
        "Developed and validated power and thermal control scripts for JPSS-3 and 4 weather satellites on simulator and flight hardware, scheduled to launch in 2027",
        "Supported as flight director during preparedness test events, ensuring clear communication and execution of procedures while meeting test objectives",
        "Led the development of a 35-page guide for configuring, maintaining and troubleshooting JPSS2-4 satellite simulators "
      ]
    },
    {
      role: "Intern",
      company: "BAE Systems",
      companylogo: require("./assets/images/bae-systems.png"),
      date: "June 2020 – Jan 2021",
      desc: "Seasonal Intern supporting the Ohio class submarine integration and testing",
      descBullets: [
        "Created 40+ models and drawings adhering to strict tolerances for Ohio class submarines which contributed to modernizing the upcoming submarines",
        "Collaborated with engineers and drafters to ensure designs met technical specifications and standards",
        "Utilized PTC Creo to create 3D models and 2D drawings, ensuring accuracy and adherence to project requirements"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of Maryland",
      companylogo: require("./assets/images/umd.png"),
      date: "Aug 2019 – Dec 2019",
      des: "Teaching Assistant for Intro to Computer Aided Design course",
      descBullets: [
        "Taught and guided over 100 students on modeling, assembling and drafting objects such as fans, bottles, gears, belt systems and more in SolidWorks, PTC Creo and Autodesk Inventor",
        "Assisted students during 2 class sessions per week and held office hours on a weekly basis",
        "Held review sessions before exams and uploaded tutorial videos for modeling and drafting parts which showed an increase in exam scores when compared to prior semesters"
      ]
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
  title: "Projects",
  subtitle:
    "Some of my projects completed during undergrad and graduate school",
  projects: [
    {
      image: require("./assets/images/robot_pic.png"),
      projectName: "Autonomous Mobile Robot",
      projectDesc:
        "Assembled & programmed an autonomous mobile robot to transport blocks in a randomized environment",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/ENPM701"
        },
        {
          name: "Watch Robot in Action",
          url: "https://www.youtube.com/watch?v=oqaQbwsCXi0"
        }
      ]
    },
    {
      image: require("./assets/images/LLM-quant.png"),
      projectName: "LLM Quantization",
      projectDesc:
        "Evaluated and integrated multiple post-training quantization techniques—including 8-bit, 4-bit, BiLLM, and pruning—on LLaMA-3.2-3B to assess their impact on factuality, adapting MMLU for 5-shot learning",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/LLM-Quantization"
        },
        {
          name: "Watch Project Overview",
          url: "https://www.youtube.com/watch?v=THFibxBji30"
        },
        {
          name: "Watch BiLLM Quantization Explained",
          url: "https://www.youtube.com/watch?v=LfWZWz7MZm0&t=7s"
        }
      ]
    },
    {
      image: require("./assets/images/obstacle_avoidance.png"),
      projectName: "Obstacle Avoidance Simulation",
      projectDesc:
        "Developed a basic obstacle avoidance system in Gazebo using C++ and ROS2, leveraging LiDAR data to dynamically adjust the robot's speed and heading. Also integrated ROS2 bag support for recording and playback of simulation data",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/simple-avoidance-simulation"
        }
      ]
    },
    {
      image: require("./assets/images/calibration_example.png"),
      projectName: "Checkerboard Calibration",
      projectDesc:
        "Single camera calibration including data collection, corner detection and optimization of intrinsic/extrinsic camera parameters",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/Calibration_StereoVision"
        }
      ]
    },
    {
      image: require("./assets/images/pickNplace.png"),
      projectName: "Pick and Place",
      projectDesc:
        "Manipulator arm picking object from table and placing on the floor while avoiding obstacles within its workspace",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/Pick-and-Place-in-Rviz"
        },
        {
          name: "Watch on Youtube",
          url: "https://www.youtube.com/watch?v=r2EN8tWc9d4"
        }
      ]
    },
    {
      image: require("./assets/images/gazebo_rviz.png"),
      projectName: "Teleoperating a custom mobile robot in Gazebo",
      projectDesc:
        "Built a custom robot model in Solidworks, exported it as a URDF and integrated a lidar sensor for Rviz visualization. Deploed the robot in Gazebo for teleoperation using custom ROS publisher/subscriber nodes",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/robot_car"
        },
        {
          name: "Watch on Youtube",
          url: "https://www.youtube.com/watch?v=ma_z-m7Bfhs"
        }
      ]
    },
    {
      image: require("./assets/images/Astar.png"),
      projectName: "A Star",
      projectDesc:
        "Combining RRT sampling with A* path planning enables efficient trajectory generation for a non-holonomic differential mobile robot in 2D simulated environments by reducing excessive tree growth and optimizing path computation",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/A-Star-Search"
        },
        {
          name: "Read Report",
          url: "https://drive.google.com/file/d/1iNmnBO30_pkyyYF2QeGOMjar1d1lMJAX/view?usp=sharing"
        }
        // {
        //   name: "Watch BiLLM Quantization Explained",
        //   url: "https://www.youtube.com/watch?v=LfWZWz7MZm0&t=7s"
        // }
      ]
    },
    {
      image: require("./assets/images/cpp_pubsub_colcon_test.png"),
      projectName: "Beginner ROS Project",
      projectDesc:
        "Created a beginner friendly ROS2 package which demos how to use publishers, subscribers, launch files, executables, inspecting transform frames, running ROS tests, recording and playing bag files.",
      footerLink: [
        {
          name: "View Repo on Github",
          url: "https://github.com/f-coronado/cpp_pubsub"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications I've completed",

  achievementsCards: [
    {
      title: "Python Data Structures",
      subtitle:
        "Completed Certifcation from University of Michigan for Python Data Structures",
      image: require("./assets/images/U-M_Logo.png"),
      imageAlt: "U of M Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/IMY01239C20H"
        }
      ]
    },
    {
      title: "Linux and Bash for Data Engineering Certificate",
      subtitle:
        "Completed Certifcation from Duke University for Linux and Bash for Data Engineering",
      image: require("./assets/images/duke-university-logo.png"),
      imageAlt: "Duke Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/HK6POHX43RLH"
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
  number: "+1-301-915-4046",
  email_address: "fabrizzio37@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

//const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  //  isHireable,
  resumeSection
};
