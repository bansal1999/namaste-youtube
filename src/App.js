import { Provider } from "react-redux";
import store from "./Utils/Store";
import "./App.css";
import Head from "./Components/Head";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 className="bg-red-900">Namate React</h1>
        <Head />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
