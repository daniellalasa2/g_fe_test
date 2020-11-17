import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Main />
      </div>
    </Provider>
  );
}

export default App;
