import './App.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPages';
import Note from './pages/Note';
import NoteList from './pages/NoteList'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app"> 
          <Header />
          <Route path="/" exact component={NoteList} />
          <Route path="/note" exact component={NotesPage} />
          <Route path="/note/:id" component={Note} />
        </div>
      </div>
    </Router>
  );
}

export default App;
