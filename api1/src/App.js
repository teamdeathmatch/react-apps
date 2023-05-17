
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [image, setImage] = useState([])

  const handleSubmit = async (term) => {
    debugger;
    console.log(term);
    const result = await searchImages(term);
    
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
