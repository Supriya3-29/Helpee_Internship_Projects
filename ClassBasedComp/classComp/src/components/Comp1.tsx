import { Component } from 'react'

export class Comp1 extends Component {
  // 1. Constructor
  state: {
    count: number;
  };

  constructor(props: {}) {
    super(props); // Always call super() with props
    this.state = { 
      count: 0
    };
  }

  // 2. Custom Methods
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 3. Lifecycle Methods (optional, e.g., componentDidMount)

  // 4. Render Method (required)
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Comp1