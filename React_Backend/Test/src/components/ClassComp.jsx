import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 54,
    };
  }

  render() {
    const { name } = this.props;
    const { data } = this.state;

    return (
      <div>
        <p>{name}</p>
        <p>{data}</p>

        <button
          onClick={() => {
            this.setState({
              data: data + 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default ClassComp;