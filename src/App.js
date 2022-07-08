import { ToastContainer } from "react-toastify";
import Register from "./components/Register";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
      <Register />
    </div>
  );
}

export default App;
