import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function AppCrousel() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Youpi Gang, des Films de dingue !</h1>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
        
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/wzIO3ytxeSNt1wRpXLIdkNbGoDm.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/tOEOlmLP71IojeJ91dyJ9Nsb8O8.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/tfY4HdwKJxkpsmpADfLrU3JWMsT.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/29Xc1OBNJd7OZ3eMpvcJqCCjugx.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/yVYTeiFv7oQsSQF9OBRngg7ZqLg.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/ylXKcKrEHSQEYLntBvYxGBI7Ld3.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/8IJyeNWpk8a2kliOU9EJvlOaLIY.jpg" /></Item>
          <Item><img className="CarousImpl" src="https://image.tmdb.org/t/p/w500/vvNQC76sDAWSgfWSTYU9kjXXNO5.jpg" /></Item>
        
        </Carousel>
      </div>
    </>
  );
}

export default AppCrousel;
