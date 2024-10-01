import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const PageContent = () => {
  return (
    <main className="min-h-screen">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        {/* Routes for other pages will be added here */}
      </Switch>
    </main>
  );
};

export default PageContent;
