import './App.css';

function App() {

  const microFrontendsByRoute = {
    '/': 'http://localhost:9002',
    '/search-result': 'http://localhost:9001',
    '/profile-detail': 'http://localhost:9003',
  };

  const pathName = microFrontendsByRoute[window.location.pathname];

  return (
    <div className="mfe-container">
      <iframe id="micro-frontend-container" title='sample' src={pathName} className="mfe-iframe" />
    </div>
  );
}

export default App;
