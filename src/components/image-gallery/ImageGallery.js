import React, { Component } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import ImageItem from "./ImageItem";
import { AiFillCloseCircle } from "react-icons/ai";

import "./ImageGallery.css";

class ImageGallery extends Component {
  columnSizes = {
    l: "image-gallery-item-l",
    m: "image-gallery-item-m",
    s: "image-gallery-item-s",
  };

  gallery = this.props.gallery;

  state = {
    visibleCarousel: false,
    activeIndex: 0,
  };

  handleToggle = (index) => {
    this.setState({
      visibleCarousel: !this.state.visibleCarousel,
      activeIndex: index,
    });
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ activeIndex: selectedIndex });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            {this.gallery.map((img, i) => {
              if (i % 11 === 0) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={6}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 1) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={3}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 2) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={3}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 3) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={3}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 4) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={6}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 5) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={3}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 6) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={6}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 7) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={6}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 8) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={3}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 9) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={3}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              } else if (i % 11 === 10) {
                return (
                  <ImageItem
                    backgroundUrl={img}
                    size={this.columnSizes.l}
                    colSize={6}
                    onClickEvent={() => this.handleToggle(i)}
                  />
                );
              }
              return (
                <ImageItem
                  backgroundUrl={
                    "https://lh3.googleusercontent.com/pw/ACtC-3fs8FxyyOgfoIMclItXTK_5y-r_JS7s73-maSw8ZJAudbfViX5aGjvdEpxpWb4XPiGRIS6g02M96zodrzR0fPZQK5Lo2xWEMorHYlN7pKpNB0plw0ZoVqJZqqMLPhNbWBPreSMOPijNgxj7r5kth1Hf=w2048-h1143-no?authuser=0"
                  }
                  colSize={12}
                />
              );
            })}
          </Row>
        </Container>
        <div>
          <Carousel
            activeIndex={this.state.activeIndex}
            onSelect={this.handleSelect}
            className={
              this.state.visibleCarousel
                ? "image-gallery-carousel-visibile"
                : "image-gallery-carousel-"
            }
          >
            {this.gallery.map((item) => (
              <Carousel.Item className="image-gallery-carousel-item">
                <div
                  className="image-gallery-carousel-img"
                  style={{
                    background: `url(${item}) center/cover no-repeat`,
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <AiFillCloseCircle
            className={
              this.state.visibleCarousel
                ? "button-close-visible"
                : "button-close"
            }
            onClick={() => this.handleToggle(0)}
          />
        </div>
      </div>
    );
  }
}

export default ImageGallery;
