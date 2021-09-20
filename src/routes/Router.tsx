import { Switch, Route, BrowserRouter } from "react-router-dom";
import Details from "../pages/Details";

import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
