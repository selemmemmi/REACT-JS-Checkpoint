import './App.css';
import Forms from './components/formulaires/Formulaire';
import weseek from './components/image/weseek.jpg';



function App () {
  return (
    <div className="App">
      <div class="box x-flex-h-center-v-any">
        <div class="login">
          <h1>
            <span>Join our community club</span>
          </h1>
        </div>
        <div class="login2">
          <img class="image" src={weseek} alt="weseek" />
          <Forms/>
        </div>
      </div>
    </div>
  );
}

export default App;
