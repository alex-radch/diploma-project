import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Route, Redirect, withRouter } from 'react-router';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Products from './Products';
import About from './About';

class Main extends Component {
  render() {
    return (
      <main>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </main>
    );
  }
}

export default withRouter(Main);
