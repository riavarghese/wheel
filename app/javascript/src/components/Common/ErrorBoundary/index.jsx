import React, { Component } from "react";

import ErrorUI from "Common/ErrorBoundary/UI";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorUI />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
