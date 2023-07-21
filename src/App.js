import { Provider } from 'react-redux';
import './App.css';
import MyRoutes from './MyRoutes';
import { store } from "./Components/reducer/store";

function App() {
  return (
    <div>
    <Provider store = {store}>
       <MyRoutes/>
    </Provider>
    </div>
  );
}

export default App;
