import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import {getCurrentDate} from './Date'
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  const Date= getCurrentDate();

  return (
    <div className="blog section_padding" id="blog">
      <div className="blog_heading">
        <h1 className="gradient_text">
          A lot is happining, We are blogging about it.
        </h1>
      </div>
      <div className="blog_container">
        <div className="blog-container_groupA">
          <Article imgUrl={blog01} date={Date} title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
        <div className="blog-container_groupB">
          <Article imgUrl={blog02} date={Date} title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog03} date={Date} title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog04} date={Date} title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date={Date} title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
        
      </div>
    </div>
  );
}

export default Blog;
