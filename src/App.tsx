import { HashRouter, Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrapperApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
export default App;
