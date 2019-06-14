import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-3" >
          <Route exact path="/events" component={Events} />
          <Route path="/users" component={Users} />
          <Route path="/new" component={New} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
    </Router>
  );
}

function Events() {
  return <h2>イベント一覧</h2>;
}

function Users() {
  return <h2>ユーザー一覧</h2>;
}

function New() {
  return <h2>イベント作成</h2>;
}

interface match {
  params: any;
  isExact: boolean;
  path: string;
  url: string;
}

type TopicProps = {
  match : match
}

function Topic({ match } : TopicProps) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

type TopicsProps = {
  match : match
}

function Topics({ match } : TopicsProps) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">LTマネージャー</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/events" href="#">イベント一覧 </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users" href="#">ユーザー一覧 </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new" href="#">イベント作成</Link>
          </li>
        </ul>
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">ログイン</button>
      </div>
    </nav>
  );
}

export default App;