import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
