import React from "react";
import Slide from "./Slide";
import { useSelector, useDispatch } from "react-redux";
import slides from "../../repository/slides";
import { useSwipeable } from "react-swipeable";
import "./Carousel.scss";

export default function Carousel() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.slidesReducer);
  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch({ type: "NEXT" }),
    onSwipedRight: () => dispatch({ type: "PREV" }),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="carousel">
      <div className="slides" {...handlers}>
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
}
