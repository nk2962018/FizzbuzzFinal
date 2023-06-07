import '../styles/App.css'
import Fizzbuzz from './Fizzbuzz';
function App() {
  return (
   <div className="App" data-testid="parent">
     <div className="heading-title" data-testid="header">The Fizzbuzz Program</div>
     <Fizzbuzz/>
   </div>
  );
}

export default App;
