export type blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: blog[] = [
  {
    title: "The Easiest Bread To Make",
    date: "10-24-2024",
    description:
      "With no work or effort, focaccia can be right at your fingertips in minutes",
    image:
      "/Users/edinhdawg/Documents/h4i/bootcamp-project-2024/bootcamp-milestone-2/images/focaccia.jpg",
    imageAlt: "focaccia with roasted garlic and tomatoes",
    slug: "blogs/focaccia",
  },
  {
    title: "Thomas Loves Matcha",
    date: "06-19-2024",
    description:
      "Thomas Le really loves Matcha latte, here is his personal recipe",
    image:
      "/Users/edinhdawg/Documents/h4i/bootcamp-project-2024/bootcamp-milestone-2/images/matcha.jpg",
    imageAlt: "thomas",
    slug: "blogs/matcha",
  },
];

export default blogs;
