import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <h1>Navbar</h1>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/taco" element={<h1>taco page</h1>}/>
          <Route path="/kitten/:id" element={<h1>one cat page</h1>}/>
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
        <h1>Footer</h1>
      </Router>
    </div>
  );
}

export default App;
