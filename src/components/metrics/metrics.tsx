import { memo } from "react";

const MetricsComponent = memo(() => {
  // That component will not be rendered because of file name
  // it will be blocked by the client in Arc or Google Chrome browser
  return <div>MetricsComponent</div>;
});

export default MetricsComponent;
