import React from "react";
import style from "./blogPreview.module.css";
import { blog } from "@/app/static/blogData";

export default function BlogPreview({ title, description, date }: blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    // <img src="./imageLinkHere" alt="img" />
    <div className={style.div}>
      <h3> {title} </h3>
      <div>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
