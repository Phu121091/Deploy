import React from "react";
import {FiExternalLink} from "react-icons/fi";
import {IoEllipsisHorizontalCircleOutline} from "react-icons/io5";
import "./BlogEx.css";

const BlogEx = () => {
  return (
    <div className="blog-exmain">
      <div className="children-blog">
        <div className="titlle-blog"><IoEllipsisHorizontalCircleOutline className="iconlink"/> Welless</div>
        <div className="head-blog">
          <div className="post-blog">
            <div className="image-post">
              <img src="https://i.pinimg.com/originals/0c/a3/c7/0ca3c7266191bcf62db15690ac0b950e.jpg" />
            </div>
            <div className="text-post">
              "Sibella’s inimitable approach to designing her home goods
              collection is driven by a desire to make beautiful objects
              currently unavailable on the market that celebrate honest
              materials & heritage trades with a consideration for immersive
              customer experience through history-rich, visual storytelling and
              a dash of make believe. "
            </div>
            <div className="link-post">
              {" "}
              <a href="https://www.vietnambooking.com/khach-san/tin-tuc-khach-san/website-dat-phong-khach-san-uy-tin.html">
                {" "}
                Read Blog... <FiExternalLink className="iconlink"/>
              </a>
              
            </div>
          </div>
          <div className="post-blog">
            <div className="image-post">
              <img src="https://i.pinimg.com/originals/0c/a3/c7/0ca3c7266191bcf62db15690ac0b950e.jpg" />
            </div>
            <div className="text-post">
              "Sibella’s inimitable approach to designing her home goods
              collection is driven by a desire to make beautiful objects
              currently unavailable on the market that celebrate honest
              materials & heritage trades with a consideration for immersive
              customer experience through history-rich, visual storytelling and
              a dash of make believe. "
            </div>
            <div className="link-post">
              {" "}
              <a href="https://www.vietnambooking.com/khach-san/tin-tuc-khach-san/website-dat-phong-khach-san-uy-tin.html">
                {" "}
                Read Blog... <FiExternalLink className="iconlink"/> 
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogEx;
