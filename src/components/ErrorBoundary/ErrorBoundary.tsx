import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Error } from '@components/Error';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: string | '';
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: '',
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      hasError: true,
      errorInfo: `${error.name}\n${error.message}`,
    });
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return <Error text={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
