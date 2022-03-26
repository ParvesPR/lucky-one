import './App.css';
import Header from './components/Header/Header';
import Places from './components/Places/Places';
import Qns from './components/Qna/Qns';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Places></Places>
      <Qns></Qns>
    </div>
  );
}

export default App;
