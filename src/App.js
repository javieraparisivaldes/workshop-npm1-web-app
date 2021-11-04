import './App.css';
import { useState } from 'react';
import { BabelSnackBar } from "story-book-npm"

function App() {
  const [feedback, setFeedback] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setFeedback("example BabelSnackBar :: OKK")}>OK</button>
        <button onClick={()=>setFeedback("example BabelSnackBar :: No")}>NO</button>
        <button onClick={()=>setFeedback("")}>HIDE</button>
      </header>

      <BabelSnackBar message={feedback} severity="warning" open={feedback!=""}/>
    </div>
  );
}

export default App;
