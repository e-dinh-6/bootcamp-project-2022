import React from "react";
import Link from "next/link";
import styles from "../blog.module.css";
import Image from "next/image";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  await connectDB();
  const blog = await Blog.findOne({ slug }).exec();

  if (!blog) {
    return (
      <main>
        <h1 className={styles.pageTitle}>Blog Not Found</h1>
        <p>
          The blog post you are looking for does not exist. Please check the URL
          or go back to the <Link href="/blog">blog page</Link>.
        </p>
      </main>
    );
  }

  return (
    <div>
      <h1 className={styles.pageTitle}>{blog.name}</h1>
      <div className={styles.blogPage}>
        <div className={styles.blogContent}>
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={500}
            height={500}
          ></Image>

          <div className={styles.blogText}>
            <p>{blog.description}</p>
            <p className={styles.posted}>
              Posted on {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className={styles.commentSection}>
          <h4 className={styles.commentTitle}>Comments: </h4>

          <p>No comments yet. Be the first to comment!</p>
        </div>
      </div>
    </div>
  );
}
