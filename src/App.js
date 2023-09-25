import './App.css';
import { Greeting } from './Greeting';

const App = () => {

    const styles = {
      container: {
        padding: 20,
        backgroundColor: new Date().getSeconds() % 2 === 0 ? "blue" : "green",
        textTransform: 'uppercase'
      }
    };

    return (
        <div style={styles.container}>
            <Greeting name="Adv Cloud Class" favoriteNumber={7} favoriteColors={["blue", "green"]} />
            <Greeting name="Bob" favoriteNumber={2} />
            <Greeting name="Sam" favoriteNumber={5} />
            <Greeting name="Billie" favoriteNumber={3} />
        </div>
  );
}

export default App;
