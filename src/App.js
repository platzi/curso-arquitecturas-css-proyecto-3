import './App.css';
import MiApi from './Components/MiApi';
import GetPokemon from './Components/GetPokemon';

function App() {
    
    return (
      <>
        <GetPokemon data={MiApi} />
      </>
  );
}

export default App;
