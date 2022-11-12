import React from "react";
import "./Blog.css";
import BlogEx from "../../components/BlogEx/BlogEx";

const Blog = () => {
  return (
    <div className="main-blog">
      <div className="top-blog">
        <div className="blog-container">
          <div className="title-blogmain"> Blog</div>
          <div className="midlle-topblog"></div>
          <div className="bot-topblog">
            <div className="bottom-title">
              {" "}
              VNXpedia - Travel all the world{" "}
            </div>
            <div className="text-area">
              Sibella Court is a creative director, interior & product designer,
              television presenter, author & founder of the The Society inc , a
              design company, online hardware emporium and purveyor of home
              goods.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="middle-blog">
        <div className="tag-choice">
          <div className="layer-middle">
            <div className="button-blog">CLASSIC </div>
            <div className="button-blog">FAMILY  </div>
            <div className="button-blog">BEACH </div>
            <div className="button-blog">SHORT TRIPS </div>
            <div className="button-blog">CULINARY </div>
            <div className="button-blog">ADVENTURE </div>
            <div className="button-blog">CRUISES </div>
            <div className="button-blog">GOLF </div>
            <div className="button-blog">WELLES </div>
            <div className="button-blog">M.I.C.E </div>
            <div className="button-blog">LUXURY </div>
            <div className="button-blog">HERITAGES </div>
            <div className="button-blog">REPONSIBLE TRAVEL </div>
          </div>
        </div>
        <div className="layerblog-middle">
        <BlogEx/>
        <BlogEx/>
        <BlogEx/>
        <BlogEx/>
        </div>
      </div>
      <div className="bottom-blog"></div>
    </div>
  );
};

export default Blog;
