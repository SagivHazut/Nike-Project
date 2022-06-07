import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CardInfoPage from "./pages/CardInfoPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import WomenStore from "./pages/Women";
import MenStore from "./pages/Men";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CardRegister from "./pages/CardsRegister";
import WomenCardRegister from "./pages/WomenCardRegister";
import AuthRegister from "./components/AuthRegister";
import AboutPage from "./pages/Aboutpage";
import Footer from "./pages/Footer";
import CardUpdate from "./pages/CardUpdate";
import { NikeStore } from "./pages/NikeStore";
import Basket from "./pages/Basket";
import RestPassword from "./pages/RestPass";
import ChangePass from "./pages/ChangePass";
import CheckOutPage from "./pages/CheckOutPage";

const SignupPage = React.lazy(() => import("./pages/SignupPage"));
function App() {
  return (
    <div>
      <NavBarComponent></NavBarComponent>
      <ToastContainer />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage} />
          <Route path="/basket" component={Basket} />
          <Route path="/changepass" component={ChangePass} />
          <Route path="/resetpassword" component={RestPassword} />
          <AuthRegister path="/login" component={LoginPage} />
          <AuthRegister path="/signup" component={SignupPage} />
          <AuthGuardRoute path="/cardregister" component={CardRegister} />
          <AuthGuardRoute path="/checkout" component={CheckOutPage} />
          <AuthGuardRoute
            path="/womencardregister"
            component={WomenCardRegister}
          />
          <Route path="/women" component={WomenStore} />
          <Route path="/men" component={MenStore} />
          <Route path="/CardsPanelPage" component={CardsPanelPage} />
          <Route path="/card/:id" component={CardInfoPage} />
          <Route path="/aboutpage" component={AboutPage} />
          <Route path="/store" component={NikeStore} />
          <AuthGuardRoute path="/CardUpdate" component={CardUpdate} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
