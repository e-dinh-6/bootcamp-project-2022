import blogs from "@/app/static/blogData";
import BlogPreview from "@/components/blogPreview";
import React from "react";
import styles from "./blogPages.module.css";

export default function Blog() {
  return (
    <div className={styles.blogPage}>
      <section className={styles.intro}>
        <h1 className={styles.pageTitle}>My Blogs</h1>
      </section>

      <div className={styles.blogContainer}>
        {blogs.map((blog) => (
          <BlogPreview {...blog} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}
