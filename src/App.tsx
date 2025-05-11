import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NotFound from "./components/NotFound"; // corrected path
const ClientHome = lazy(() => import("./pages/ClientHome"));

// ErrorBoundary to catch runtime/component errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />; // Reuse NotFound as a generic error fallback
    }

    return this.props.children;
  }
}

function App() {
  return (
    <div className="bg-[var(--color-background)] overflow-x-hidden">
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Wrapper />} />
              <Route path="/client" element={<ClientHome />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
