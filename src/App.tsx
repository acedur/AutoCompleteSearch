import './App.css';
import AutoComplete from './components/AutoComplete';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>AutoComplete Search</h1>
      <AutoComplete apiUrl="https://jsonplaceholder.typicode.com/todos" />
    </div>
  );
};

export default App;
