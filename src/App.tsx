import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";
import ImageComponent from "./components/Image";
function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
        <h1>blah blah</h1>
        <ImageComponent/>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          quod?
        </Alert>
      )}
      <Button
        onClick={() => setShowAlert(true)}
        color={"danger"}
      >
        Hello
      </Button>
    </div>
  );
}

export default App;
