import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
 firstName: "Omid",
 lastName: "Gosha",
 initials: "oc", // the example uses first and last, but feel free to use three or more if you like.
 position: "a Software Developer Engineer",
 selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
 gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
 baseColor: colors[0],
 interviews: [
  {
   companyAnagram: "TechnologiStfy",
   languages: ["C#", "ReactJs", "SQL"],
   questions: [
    {
     Q: "We have all the numbers from 1 to n in an array and only a number is duplicated -> How to find that number?",
     A: "I used a Dict for that, but then the interviewers asked me to optimize the solution several times",
    },
    {
     Q: "How does the dict works? why accessing an element in it is O(1)?",
     A: "I explained that it goes through the hashmap, and then the conversations went to -> How does hashmap actually works?",
    },
    {
     Q: "Software design patterns:",
     A: "Get familiar with -Dependency Injection- pattern in C# coding",
    },
    {
     Q: "What is a TASK in C#? How does the code flow act with tasks?",
     A: "Explaining the await/async behavior and explaining what happens actually in a synchronous vs. asynchronous code block; i.e. how does actually the thread acts",
    },
   ],
  },
  {
   companyAnagram: "guiDonsc",
   languages: ["C#"],
   questions: [
    {
     Q: "What was one of the last conficts you had in your job? How did you settled it down?",
     A: "<softskill-answer>",
    },
    {
     Q: "What are your personal OKRs? and regarding the technical ones in your current job, what were the last OKRs you owned?",
     A: "<softskill-answer>",
    },
   ],
  },
 ],
 miniBio: [
  // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
  {
   emoji: "🎮",
   text: "video gamer",
  },
  {
   emoji: "🌎",
   text: "based in the Paris",
  },
  {
   emoji: "💼",
   text: "Tech Lead at IQVIA France",
  },
  {
   emoji: "📧",
   text: "omidgosha@gmail.com",
  },
 ],
 socials: [
  {
   link: "https://www.facebook.com/ochehrehgosha/",
   icon: "fa fa-facebook",
   label: "facebook",
  },
  {
   link: "https://instagram.com/votometale",
   icon: "fa fa-instagram",
   label: "instagram",
  },
  {
   link: "https://github.com/omidgosha",
   icon: "fa fa-github",
   label: "github",
  },
  {
   link: "https://linkedin.com/in/omid-chehrehgosha ",
   icon: "fa fa-linkedin",
   label: "linkedin",
  },
  {
   link: "https://twitter.com",
   icon: "fa fa-twitter",
   label: "twitter",
  },
  // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
  // Just change the links so that they lead to your social profiles.
 ],
 bio: "Hello! I'm Omid. Senior software engineer x Tech lead at IQVIA France. I studied CompSci: M1 at TU Berlin and M2 at EURECOM, I enjoy spending my free time playing video games, photography and anything that brings visual pleasure to the eyes!",
 skills: {
  proficientWith: [
   "C#",
   "python",
   "javascript",
   "nodejs",
   "react",
   "git",
   "sklearn",
   "expressjs",
   "redis",
   "MySQL/NoSQL",
  ],
  exposedTo: ["Scala", "PyTorch"],
 },
 hobbies: [
  {
   label: "photography",
   emoji: "📸",
  },
  {
   label: "gaming",
   emoji: "🎮",
  },
  {
   label: "soccer",
   emoji: "⚽",
  },
  {
   label: "cooking",
   emoji: "🌶",
  },
  // Same as above, change the emojis to match / relate to your hobbies or interests.
  // You can also remove the emojis if you'd like, I just think they look cute :P
 ],
 portfolio: [
  // This is where your portfolio projects will be detailed
  {
    title: "Tech Lead @ IQVIA France",
    live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
    source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
    date: "Nov 2023 - Present",
    explanation: [
     "- Technical lead for a new product for a two pharmaceutical clients as beta testers",
     "- Worked the first months of the product as one of the first two software engineers responsible for creating the POC",
     "- Worked as the project manager in the shape up methodology to make sure of the consistent delivery to clients.",
    ],
    image: "https://logo-marque.com/wp-content/uploads/2021/06/Criteo-Nouveau-Logo.jpg",
   },
   {
   title: "Criteo",
   live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
   source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
   date: "Nov 2021 - Nov 2023",
   explanation: [
    "- Part of Video team/squad; responsible for integration of Video as a new type of ad in Criteo; handling and transforming milions of impressions per day through our a datapipeline to a real-time bidder participating in thousands of video-ad bids per second.",
    "- Increased viewability measurements up to 50% for global video traffic; by development and deploying two important assets, VPAID and OMID",
    "- Doubled the potential for Video ads clients; by enabling a new type of video campaigns on Criteo stack, namely third-party video campaign.",
    "- Activated the partnership with the big SSP partners e.g. Taboola, Xandr (Netflix), etc. ; Throughout implementing new features on Criteo Render engine.",
    "- Introduced category-based contextual targeting; by training a machine learning model which is capable of predicting mobile-apps categories based on their description on app-stores."
   ],
   image: "https://logo-marque.com/wp-content/uploads/2021/06/Criteo-Nouveau-Logo.jpg",
  },
  {
   title: "Nokia Bell Labs",
   date: "Mar 2021- Aug 2021",
   live: "https://paytonpierce.dev",
   source: "https://github.com/paytonjewell",
   explanation: [
    "- Introduced and developed IoTNM, a groundbreaking platform for monitoring IoT networks. By leveraging a micro-service architecture, IoTNM orchestrates and probes IoT devices, enabling enhanced visibility and control to ensure optimal performance and security.",
    "- Integrated RabbitMQ as a powerful message broker, enhancing platform efficiency, reliability, and scalability for seamless real-time data processing and flexible system architecture.",
    "- Designed and implemented a scalable and robust solution utilizing a microservice architecture and containerization with Docker. Orchestrated a cohesive ecosystem of microservices, ensuring seamless integration and optimal performance."

   ],
   image: mock2,
  },
  {
   title: "Project 3",
   live: "https://paytonpierce.dev",
   source: "https://github.com/paytonjewell",
   explanation: ["This is my sample project"],
   image: mock3,
  },
  {
   title: "Project 4",
   live: "https://paytonpierce.dev",
   source: "https://github.com/paytonjewell",
   explanation: ["This is my sample project"],
   image: mock4,
  },
  {
   title: "Project 5",
   live: "https://paytonpierce.dev",
   source: "https://github.com/paytonjewell",
   explanation: ["This is my sample project"],
   image: mock5,
  },
 ],
};
