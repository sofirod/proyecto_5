import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error capturado por el ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }

    return this.props.children;
  }
}

function FallbackUI() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Algo salió mal</h2>
      <button onClick={() => navigate('/')}>Volver a Inicio</button>
      <div style={{ marginTop: 20 }}>
        <InicioCard />
      </div>
    </div>
  );
}

export default ErrorBoundary;
