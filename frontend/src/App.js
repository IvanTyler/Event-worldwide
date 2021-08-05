import './App.css';
import axios from 'axios'

function App() {

  const serv = axios.get('http://87.249.49.53:3001')
  console.log(serv)
  return (
    <div className="App">
      <div>Сдесь будет проект 😀</div>
    </div>
  );
}

export default App;
