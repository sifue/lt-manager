import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-3" >
          <Route exact path="/" component={Home} />
          <Route exact path="/login"  component={Login} />
          <PrivateRoute exact path="/events" component={Events} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/new" component={New} />
        </div>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: () => void) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: () => void) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"
          onClick={() => {
            fakeAuth.signout(() => history.push("/login"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return (
    <div>
    <div className="jumbotron">
      <h1 className="display-4">LTマネージャー</h1>
      <p className="lead">LTマネージャーは、LT(ライトニングトークという短いプレゼンテーション)をするイベントを管理するツールです。LTの登録のほか、LTへのコメントを残したりすることができます。</p>
      <hr className="my-4" />
      <p>特定のドメインのGoogleアカウントでログインすることで、その組織だけのLTイベントを閲覧、管理したり、コメントをすることができます。</p>
    </div>
    <div className="list-group">
        <Link className="list-group-item" to="/events" href="#">イベント一覧 </Link>
        <Link className="list-group-item" to="/users" href="#">ユーザー一覧 </Link>
        <Link className="list-group-item" to="/new" href="#">イベント作成</Link>
    </div>
</div>);
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
        <AuthButton/>
      </div>
    </nav>
  );
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props['location'].state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="jumbotron">
        <h1 className="display-4">LTマネージャー</h1>
        <p className="lead">LTマネージャーは、LT(ライトニングトークという短いプレゼンテーション)をするイベントを管理するツールです。LTの登録のほか、LTへのコメントを残したりすることができます。</p>
        <hr className="my-4" />
        <p>特定のドメインのGoogleアカウントでログインすることで、その組織だけのLTイベントを閲覧、管理したり、コメントをすることができます。</p>
        <button className="btn btn-primary btn-lg" role="presentation" onClick={this.login} >ログイン</button>
      </div>
    );
  }
}

export default App;