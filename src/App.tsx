import { useContext } from 'react';
import './App.css';
import Form from './components/Form';
import GasPrices from './components/GasPrices';
import { SeedsContext } from './state/seeds-context';

function App() {
  const seeds = useContext(SeedsContext);

  return (
    <>
      <header className="shadow p-4 pl-8 fixed top-0 left-0 right-0 z-10  text-white bg-slate-800">
        <h1 className="text-xl font-bold">Get Gas</h1>
      </header>

      <main className="flex flex-col justify-center align-center text-white bg-slate-800">
        {seeds.apiKey && seeds.chain && seeds.eventType ? (
          <GasPrices />
        ) : (
          <Form />
        )}
      </main>
    </>
  );
}

export default App;
