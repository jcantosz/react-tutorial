import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // defining this way allows it to have the correct context for 'this'
  handleIndexClick = (event) => {
    this.setState({
      // '+' converts string to number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props ? this.props : this.defaultProps.images;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // don't do the onClick handler this way
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
