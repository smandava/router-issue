import React, { Component } from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="App-content">
            <Header />          
            <div className="App-Main">
                <Route exact={true} path="/" component={Home} />
                <Route path="/products" component={About} />
                <Route path="/about" component={Products} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


class NavBar extends Component {
  render() {
    return (
      <aside className="mdc-persistent-drawer" ref={(d) => this.drawer = d}>
        <nav className="mdc-persistent-drawer__drawer">
          <div className="mdc-persistent-drawer__toolbar-spacer" />
          <div className="mdc-list-group">
            <nav className="mdc-list">
              <NavBarLink path="/" text="Home" />
              <NavBarLink path="/products" text="Products" />
              <NavBarLink path="/about" text="About" />
            </nav>
          </div>
        </nav>
      </aside>
    );
  }
  componentDidMount() {
    let x = new window.mdc.drawer.MDCPersistentDrawer(this.drawer);
    x.open = true;
  }
}

const NavBarLink = (props) => (
  <Link className="mdc-list-item" to={props.path}>
      {props.text}
  </Link>
);


const Header = () => (
  <header className="mdc-toolbar mdc-elevation--z4">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        <button className="demo-menu material-icons mdc-toolbar__icon--menu">menu</button>
        <span className="mdc-toolbar__title catalog-title">Persistent Drawer</span>
      </section>
    </div>
  </header>
);

const Home = () => (
  <div className="mdc-typography--display1">Home</div>
);


const About = () => (
  <div className="mdc-typography--display1">About</div>
);

const Products = () => (
  <div className="mdc-typography--display1">Products</div>
);


export default App;
