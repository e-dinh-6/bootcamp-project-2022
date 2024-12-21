import React from "react";
import style from "./blogPreview.module.css";
import { blog } from "@/app/static/blogData";
import Image from "next/image";

export default function BlogPreview({
  title,
  description,
  date,
  image,
  imageAlt,
}: blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones

    <div className={style.div}>
      <h3 className={style.blogTitle}> {title} </h3>
      <div>
        <Image src={image} alt={imageAlt} width={500} height={500}></Image>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
