const blogName = "Overreacted";

const blogAbout =
  "Personal blog by Dan Abramov. I explain with words and code.";

const blogImage =
  "https://reactjs.org/logo-og.png";

const blogPosts = [
  {
    id: 1,
    title: "React is pretty cool",
    date: "July 13, 2020",
    preview: "In this post, I talk about React and why it's great...",
    minutes: 10,
  },
  {
    id: 2,
    title: "Understanding useEffect",
    date: "July 14, 2020",
    preview: "Let's dive into how useEffect works in depth.",
    minutes: 45,
  },
  {
    id: 3,
    title: "Why I Love JavaScript",
    preview: "JavaScript has its quirks, but it's my favorite language.",
    minutes: 7,
  },
];

export default {
  name: blogName,
  about: blogAbout,
  image: blogImage,
  posts: blogPosts,
};
