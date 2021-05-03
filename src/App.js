import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
   
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
     <div className="content">
       <Switch>
         {/* Switch makes sure only one route at a time is being used, if it wouldnt be there, 
         More than one page. */}
         <Route exact path ="/">
         <Home></Home>
         </Route>
         <Route exact path="/create">   
         {/* now the prop of create will be overtaken by /,/c,/cr because they are somewhat same looking for
         the compiler as /create. To debug this we use exact path.*/}
          <Create></Create>
         </Route>
         <Route exact path ="/blogs/:id">
         <BlogDetails></BlogDetails>
         </Route>
         <Route path='*'>
           <NotFound></NotFound>
         </Route>
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
