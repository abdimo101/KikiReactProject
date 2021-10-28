import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Work from './components/Work';
import Cases from './components/Cases';

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Work/>
      <Cases/>
    </div>
  );
}

export default App;
