import './App.css';
import { GlobalHeader, IconSettings } from '@salesforce/design-system-react'; 

function App() {

  const microFrontendsByRoute = {
    '/': 'http://localhost:9002',
    '/search-result': 'http://localhost:9001',
    '/profile-detail': 'http://localhost:9003',
  };

  const pathName = microFrontendsByRoute[window.location.pathname];

  return (
    <div className="mfe-container">
      <IconSettings iconPath="/icons">
        <GlobalHeader logoSrc="/images/logo.svg" />
      </IconSettings>
      <div className ="slds-p-top_x-small">
      <iframe id="micro-frontend-container" title='sample' src={pathName} className="mfe-iframe" />
      </div>
    </div>
  );
}

export default App;
