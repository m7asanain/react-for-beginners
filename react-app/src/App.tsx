// rafce

import BootstrapButton from "./components/BootstrapButton";

function App() {
  return (
    <div>
      <BootstrapButton
        // color="danger" - we set a defult value
        color="secondary"
        onClick={() => console.log("hello form App.tsx")}
      >
        My Button
      </BootstrapButton>
    </div>
  );
}

export default App;
