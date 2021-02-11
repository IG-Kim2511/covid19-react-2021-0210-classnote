
import './App.css';
// import './style.scss';

// r 10 , 파일명 js는 생략 가능
import Header from './components/Header'
import Contents from './components/Contents'


function App() {
  return (
    <div className="App">
    
    {/* react 9 components */}
    <Header/>  
    <Contents></Contents>
    
    </div>
  )
}

export default App;
