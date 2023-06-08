import { FC, Suspense, lazy } from "react";

const MetricsComponent = lazy(() => import("./components/metrics/metrics"));

const App: FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MetricsComponent />
      </Suspense>
    </div>
  );
};

export default App;
