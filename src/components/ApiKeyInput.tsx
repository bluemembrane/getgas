import { useContext, useState } from 'react';
import { SeedsDispatchContext } from '../state/seeds-context';

function ApiKeyInput() {
  const [apiKey, setApiKey] = useState('');
  const dispatch = useContext(SeedsDispatchContext);

  return (
    <>
      <h2 className="text-2xl mb-3">1. API Key</h2>
      <p className="text-xl">Kindly enter your Covalent API Key</p>
      <p className="mb-8">We will use it to get the gas prices.</p>
      <input
        className="text-lg mb-12 w-full bg-transparent border-b-2 border-rose-500 focus:outline-none"
        required
        placeholder="cqt_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        pattern="^\w{25,40}$"
        onChange={(e) => setApiKey(e.target.value)}
      />
      <p className="text-right">
        <button
          className="bg-rose-500 text-white font-bold py-3 px-4 rounded-md leading-none"
          onClick={() =>
            /^\w{25,40}$/.test(apiKey)
              ? dispatch({ type: 'addApiKey', data: { apiKey } })
              : null
          }
        >
          Next
        </button>
      </p>
    </>
  );
}

export default ApiKeyInput;
