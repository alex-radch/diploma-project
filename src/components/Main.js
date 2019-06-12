import React from 'react';
import { Switch } from 'react-router-dom';
import { Route, Redirect, withRouter } from 'react-router';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';

function Main() {
    return (
      <main>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contacts" component={Contacts} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </main>
    );
}

export default withRouter(Main);
