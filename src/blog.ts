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
    title: "The Easiest Bread To Make",
    date: "10-24-2024",
    description:
      "With no work or effort, focaccia can be right at your fingertips in minutes",
    image: "images/focaccia.jpg",
    imageAlt: "focaccia with roasted garlic and tomatoes",
    slug: "blogs/focaccia",
  },
  {
    title: "Thomas Loves Matcha",
    date: "06-19-2024",
    description:
      "Thomas Le really loves Matcha latte, here is his personal recipe",
    image: "images/thomas.jpg",
    imageAlt: "thomas",
    slug: "blogs/matcha",
  },
];

const blogContainer = document.querySelector(".blog-container");
blogs.forEach((blog) => {
  const blogLink = document.createElement("a");
  blogLink.href = `${blog.slug}.html`;

  const blogPage = document.createElement("div");
  const blogTitle = document.createElement("h1");
  blogTitle.innerHTML = blog.title;
  const blogDate = document.createElement("h3");
  blogDate.innerHTML = blog["date"];
  const blogDesc = document.createElement("p");
  blogDesc.innerHTML = blog["description"];
  const blogImg = document.createElement("img");
  blogImg.src = blog["image"];

  blogPage.appendChild(blogTitle);
  blogPage.appendChild(blogDate);
  blogPage.appendChild(blogDesc);
  blogPage.appendChild(blogImg);

  blogLink.appendChild(blogPage);

  blogContainer.appendChild(blogLink);
});
