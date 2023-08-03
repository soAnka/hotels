import {
  Component,
  ErrorInfo,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

type ErrorBoundaryProps = PropsWithChildren<{
  errorMessage: ReactElement | undefined;
  children: ReactNode;
}>;

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("ErrorBoundary caught error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>{this.props.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
