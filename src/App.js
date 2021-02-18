import Router from './Router';
import {NavLink} from 'react-router-dom'

const Navigation =(props) => { return (<nav>
                <ul>
                      <li><NavLink to='/'>Home</NavLink></li>
                      <li><NavLink to='/cart'>Cart</NavLink></li>
                </ul>
          </nav>)};

function App() {
  return (
    <div className="page-container">
      <h1>Shopping Cart</h1>
      <Navigation/>
      <Router/>
    </div>
  );
}

export default App;
