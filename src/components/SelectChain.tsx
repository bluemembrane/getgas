import { useContext, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import chains from '../options/chains';
import { SeedsDispatchContext } from '../state/seeds-context';

function SelectChain() {
  const [chain, setChain] = useState('');
  const dispatch = useContext(SeedsDispatchContext);

  return (
    <>
      <h2 className="text-2xl mb-3">2. Select Chain</h2>
      <p className="text-xl mb-8">Kindly set a blockchain network.</p>
      <Dropdown
        className="mb-12 bg-slate-900 text-white"
        placeholder="Select Chain"
        fluid
        search
        selection
        onChange={(_, data) => setChain(`${data.value}`)}
        options={chains}
      />
      <p className="flex flex-row-reverse">
        <button
          className="bg-rose-500 text-white font-bold py-3 px-4 ml-4 rounded-md leading-none"
          onClick={(e) => {
            e.preventDefault();
            chain ? dispatch({ type: 'addChain', data: { chain } }) : null;
          }}
        >
          Next
        </button>
        <button
          className="text-rose-500 font-bold py-3 px-4 rounded-md leading-none"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'removeApiKey', data: {} });
          }}
        >
          Previous
        </button>
      </p>
    </>
  );
}

export default SelectChain;
