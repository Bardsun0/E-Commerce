import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">
            BardSun's E-Commerce Project
          </h1>
          <Switch>
            <Route path="/signup" component={SignUpForm} />
            {/* Add other routes as needed */}
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
