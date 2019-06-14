import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-3" >
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/users" component={Users} />
          <Route path="/new" component={New} />
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">LTマネージャー</h1>
      <p className="lead">LTマネージャーは、LT(ライトニングトークという短いプレゼンテーション)をするイベントを管理するツールです。LTの登録のほか、LTへのコメントを残したりすることができます。</p>
      <hr className="my-4" />
      <p>特定のドメインのGoogleアカウントでログインすることで、その組織だけのLTイベントを閲覧、管理したり、コメントをすることができます。</p>
      <button className="btn btn-primary btn-lg" role="button">ログイン</button>
    </div>
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