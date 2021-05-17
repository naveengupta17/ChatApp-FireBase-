
import './App.css';
import Sidebar from './Sidebar';
import {useState} from "react";
import Chat from './Chat';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  console.log(user);
  return (
    //Bem naming convenction
    <div className="App">
      {!user?(
       <Login/>
      ):(
     <div className="app__body">
       <Router>
       <Sidebar/>
         <Switch>
        
         
           <Route path="/rooms/:roomId">
             <Chat/>
        </Route>
        <Route path="/"><Chat/></Route>
        
      </Switch>
      </Router>
     </div>
      )}
      </div>
  );
}

export default App;
