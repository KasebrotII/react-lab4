import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
      <Greeting name="Adv Cloud Class" favoriteNumber={7} />
      <Greeting name="Bob" favoriteNumber={2}/>
      <Greeting name="Sam" favoriteNumber={5}/>
      <Greeting name="Billie" favoriteNumber={3}/>
    </>
  );
}

export default App;
