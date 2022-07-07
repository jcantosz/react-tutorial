import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  // same as constructor below
  state = { loading: true };

  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    // These 2 are the same, add loading state to json we got back
    //this.setState(Object.assign({ loading: false }, json.pets[0]));
    this.setState({ loading: false, ...json.pets[0] });
  }
  // Class components MUST have a render function
  render() {
    //throw new Error("it died");
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button style={{ backgroundColor: this.props.theme }}>
            Adopt {name}
          </button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);
  return (
    // Boudary must be a layer above where we expect to see the error
    <ErrorBoundary>
      <Details params={params} theme={theme} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
