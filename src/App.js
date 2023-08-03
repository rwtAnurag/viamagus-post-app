import './App.css';
import Posts from './components/Posts';
import CretaePosts from "./components/CreatePosts.js"
import SeeDetails from './components/SeeDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
           <Route  path="/create-new-post" component={CretaePosts} />
           <Route  path="/posts-details" component={SeeDetails} />
           <Route path="/" component={Posts}/>
         
        </Switch>
    </Router>
  );
}

export default App;
