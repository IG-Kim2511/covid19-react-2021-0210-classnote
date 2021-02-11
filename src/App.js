import logo from './logo.svg';
import './App.css';
import './style.scss';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>COVID-19</h1>
          <select name="" id="">
            <option value="">국내</option>
            <option value="">세계</option>
          </select>
      
      </header>

      <section>
        <h2>국내 코로나 현황</h2>
        <div className="contents">
        </div>
      </section>
    </div>
  )
}

export default App;
