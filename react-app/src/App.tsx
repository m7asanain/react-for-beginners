import { useState } from "react";
import Alert from "./components/Alert";
import BootstrapButton from "./components/BootstrapButton";

// rafce
function App() {
  const [alertVisibile, setAlertvisibility] = useState(false);
  return (
    <div>
      {alertVisibile && (
        <Alert onClose={() => setAlertvisibility(false)}>My Alert</Alert>
      )}
      <BootstrapButton color="primary" onClick={() => setAlertvisibility(true)}>
        Button
      </BootstrapButton>
    </div>
  );
}

export default App;
