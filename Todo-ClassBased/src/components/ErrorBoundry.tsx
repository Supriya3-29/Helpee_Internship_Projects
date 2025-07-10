import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;// React elements passed inside <ErrorBoundary>...</ErrorBoundary>
}

interface State {
  hasError: boolean;// Tracks whether an error has occurred
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to a reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>; // fallback UI
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
