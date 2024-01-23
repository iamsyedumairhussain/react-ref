import "./App.css";
import React from "react";
function App() {
  const myRef = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(myRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={myRef} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
