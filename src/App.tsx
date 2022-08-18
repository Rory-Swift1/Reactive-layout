import React,{ Suspense } from 'react';
import './App.css';
import CssTest from './components/CssTest';

const Test = React.lazy(()=>import ('./components/Test'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading....</p>}>
     <Test/>
     </Suspense>
    <CssTest/>
    </div>
  );
}

export default App;
