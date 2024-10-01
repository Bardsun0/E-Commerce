import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <PageContent />
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
