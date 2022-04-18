import React from "react";
import "./App.css";
import "bootstrap";
import { Route } from "react-router-dom";
import Send from "./component/Send/Send";
import Wallet from "./component/Wallet/Wallet";
import History from "./component/History/History";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Passwordfind from "./component/Passwordfind";
import Passwordchange from "./component/Passwordchange";
import Infochack from "./component/Infochack/Infochack";
import MyInfos from "./component/MyInfo/MyInfos";
import Question from "./component/Question/Question";
import AskQuestion from "./component/Ask/AskQuestion";
import QuestionAnswer from "./component/QuesionAnswer/QuestionAnswer";
import Master from "./component/Master/Master";
import MasterQnA from "./component/MasterQnA/MasterQnA";
import Logout from "./component/Logout";
import SendMmt from "./component/Send/SendMmt";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/send" component={Send} />
      <Route path="/mmtsend" component={SendMmt} />
      <Route path="/history" component={History} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route exact path="/wallet" component={Wallet} />
      <Route exact path="/myinfo" component={Infochack} />
      <Route exact path="/myinfo/user/:id" component={MyInfos} />
      <Route exact path="/user/master/:id/question" component={Master} />
      <Route exact path="/user/master/:id/question/:id" component={MasterQnA} />
      <Route exact path="/user/:id/question" component={Question} />
      <Route exact path="/user/:id/question/:id" component={QuestionAnswer} />
      <Route exact path="/user/:id/ask" component={AskQuestion} />
      <Route exact path="/Passwordfind" component={Passwordfind} />
      <Route path="/Passwordfind/passwordchange" component={Passwordchange} />
    </div>
  );
}

export default App;
