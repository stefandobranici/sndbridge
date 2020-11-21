import slides from "../../repository/slides";

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    case "PREV":
      return {
        ...state,
        slideIndex:
          state.slideIndex === slides.length - 1 ? 0 : state.slideIndex + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default slidesReducer;
