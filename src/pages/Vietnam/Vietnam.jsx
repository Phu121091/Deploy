import React from "react";
import { useState } from "react";
import "./Vietnam.css";

const Vietnam = () => {
  const [slide, setSlide] = useState(1);

  const handleSlider = () => {
    if(slide === 1) {
      setTimeout(() => {
        setSlide(slide + 1)
      }, 3000)
    } else if(slide === 2) {
      setTimeout(() => {
        setSlide(slide + 1)
      }, 3000)
    } else if (slide === 3) {
      setTimeout(() => {
        setSlide(1)
      }, 3000)
    }
  }

  return (
    <div>
      <div className="header-vietnam">
        <div className="top-body">
          <div className="thead pleft "></div>
          <div className="thead pcenter "></div>
          <div className="thead pright "></div>
        </div>
        <div className="text-head">Wellcome to Viet Nam</div>
        <div className="text-mid">
          Viet Nam - Ve dep tiem an trong moi con nguoi
        </div>
      </div>
      <div className="body-vietnam">
        <div className="box-area">
          <div className="title-vietnam">
            <div className="titile-top"> Plane Your Travel</div>
            <div className="title-bottom"> Where you go next?</div>
          </div>
        </div>
        <div className="picture-area">
          <div className="space">
            <div className="space-title">Northern</div>
          </div>
          <div className="space">
            <div className="space-title">Central</div>
          </div>
          <div className="space">
            <div className="space-title">South</div>
            </div>
        </div>
      </div>
      <div className="info-region">
        <div className="title-vietnam">
          <div className="titile-top"> Let's i tell you</div>
          <div className="title-bottom"> Some where you can like it!</div>
        </div>
        <div className="picture-region">
          <div className="a000001 s1"> Sapa</div>
          <div className="a000001 s2"> Ha Noi</div>
          <div className="a000001 s3"> Ha Long</div>
          <div className="a000001 s4"> Da Nang</div>
          <div className="a000001 s5"> Hue</div>
          <div className="a000001 s6"> Sai Gon</div>
          <div className="a000001 s7"> Phu Quoc</div>
          <div className="a000001 s8"> Bach Long Vi</div>
          <div className="a000001 s9"> Da Lat</div>
          <div className="a000001 s10"> Ca Mau</div>
        </div>
      </div>
      <div className="a0002">
        <div className="area1">
          <div className="about-content">
            <div className="a0003"> What is attractive in Vietnam? </div>
            <div className="a0005">
              <ul>
                <li>
                  <b>Area:</b> 331,211.6 km²{" "}
                </li>
                <li>
                  {" "}
                  <b>Population</b>: 85,789.6 thousand people (April 2009){" "}
                </li>
                <li>
                  <b>Capital:</b> Hanoi{" "}
                </li>
                <li>
                  <b>Climate:</b> Vietnam is a tropical monsoon country;{" "}
                </li>
                <li>
                  <b>Terrain:</b>: The territory of Vietnam consists of 3 parts
                  and 4 are hills;{" "}
                </li>
                <li>
                  <b>Administrative units:</b> Vietnam has 63 provinces and
                  cities.{" "}
                </li>
                <li>
                  <b>Latitude:</b> 8º 02′ – 23º 23′ north{" "}
                </li>
              </ul>
            </div>
            <div className="a0007"> Destination Famous</div>
            <div className="a0006">
              <div className="scroll-box">
                <div className="b0x1">
                  <div className="left-box"></div>
                  <div className="right-box">
                    <div className="boxx-title">Ha Long</div>
                  </div>
                </div>

                <div className="b0x1">
                  <div className="left-box"></div>
                  <div className="right-box">
                    <div className="boxx-title">Ha Noi</div>
                  </div>
                </div>

                <div className="b0x1">
                  <div className="left-box"></div>
                  <div className="right-box">
                    <div className="boxx-title">Ha Long</div>
                  </div>
                </div>

                <div className="b0x1">
                  <div className="left-box"></div>
                  <div className="right-box">
                    <div className="boxx-title">Ha Noi</div>
                  </div>
                </div>

                <div className="b0x1">
                  <div className="left-box"></div>
                  <div className="right-box">
                    <div className="boxx-title">Ha Long</div>
                  </div>
                </div>

                <div className="b0x1">
                  <div className="left-box"></div>
                  <div className="right-box">
                    <div className="boxx-title">Ha Noi</div>
                  </div>
                </div>
              </div>
              <div className="explain">
                <div className="city-info">
                  <ul>
                    <li>
                      <b>Area:</b> 3.324,92 km2.{" "}
                    </li>
                    <li>
                      {" "}
                      <b>Population</b>: More 8.5 million people(02/2022).{" "}
                    </li>
                    <li>
                      <b>Climate:</b> Tropical monsoon.{" "}
                    </li>
                    <li>
                      <b>Consists:</b>: 12 districts, 1 town and 17 districts.{" "}
                    </li>
                    <li>
                      <b>Characteristics:</b> economic, political, cultural, scientific center{" "}
                    </li>
                    <li>
                      <b>Latitude:</b> 20°53' to 21°23' North latitude and 105°44' to 106°02' East longitude{" "}
                    </li>
                  </ul>
                </div>
                <div className="city-images" onLoad={handleSlider()}>
                  {slide === 1 && <img className="city-img" src="https://vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty" alt="" />}
                  {slide === 2 && <img className="city-img" src="https://www.pacificairlines.com/wp-content/uploads/2020/07/Web-banner_web2-min.png" alt="" />}
                  {slide === 3 && <img className="city-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=700&h=-1&s=1" alt="" />}
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area1">
            <ul>
              <li>
                <a href="/">Info</a>
              </li>
              <li>
                <a href="/">Destination Famous</a>
              </li>
              <li>
                <a href="/">Place to go</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="a0009"> Hot In Near Time</div>
      <div className="tour-invn">
        <div className="tour"></div>
        <div className="tour"></div>
        <div className="tour"></div>
        <div className="tour"></div>
        <div className="tour"></div>
      </div>
      <div className="seemore">
        <div className="a0008"><a href="/">See More Tour In Viet Nam  </a></div> 
      </div>
    </div>
  );
};

export default Vietnam;
