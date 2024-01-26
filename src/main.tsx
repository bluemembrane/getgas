import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import App from './App.tsx';
import './index.css';
import { SeedsProvider } from './state/seeds-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SeedsProvider>
    <App />
  </SeedsProvider>
);
