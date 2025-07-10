import { Component } from 'react'

interface AppProps {
  name: string;
}

export default class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>;
        </div>
    )
  }
}
