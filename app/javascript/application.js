// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [greeting, setGreeting] = useState("0")
  
  return (
    <h1>{greeting}</h1>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);