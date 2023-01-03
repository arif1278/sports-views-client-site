// import { RouterProvider } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
