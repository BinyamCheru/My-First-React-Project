import React from "react";
import GroupList from "./components/GroupList"; // Adjust the path if your component is in a different folder.
import "./App.css"; // Optional: Add styles for your app.

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to the Group Directory</h1>
      <GroupList text="Our Team" />
    </div>
  );
};

export default App;
