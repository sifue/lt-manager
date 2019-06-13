import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (

    <Router>
      <div>
        <Header />
        <Container>
          <Route exact path="/events" component={Events} />
          <Route path="/users" component={Users} />
          <Route path="/new" component={New} />
          <Route path="/topics" component={Topics} />
        </Container>
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">LT管理ツール</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/events">イベント一覧</Link></Nav.Link>
        <Nav.Link><Link to="/users">ユーザー一覧</Link></Nav.Link>
        <Nav.Link><Link to="/new">イベント作成</Link></Nav.Link>
        <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default App;