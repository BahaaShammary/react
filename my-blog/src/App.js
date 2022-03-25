import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import ArticlesListPage from './pages/ArticlesListPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  // When we don't give a route a path, it will always match by default
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles-list' element={<ArticlesListPage />} />
            <Route path='/article/:name' element={<ArticlePage />} /> 
            <Route path='/*' element={<NotFoundPage />} /> 
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
