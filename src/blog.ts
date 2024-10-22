type blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: blog[] = [
  {
    title: "Blog Example 1",
    date: "06-19-2024",
    description: "this is a description",
    image: "./image/me.png",
    imageAlt: "example of image alt",
    slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
  },
  {
    title: "Thomas Loves Matcha",
    date: "06-19-2024",
    description: "this is a description",
    image: "./images/thomas.jpg",
    imageAlt: "thomas drinking matcha",
    slug: "https://example.com/blogs/thomas",
  },
];

const blogContainer = document.getElementById("blog-container");
