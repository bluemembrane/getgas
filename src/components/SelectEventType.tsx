import { useContext, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import eventTypes from '../options/event-types';
import { SeedsDispatchContext } from '../state/seeds-context';

function SelectEventType() {
  const [eventType, setEventType] = useState('');
  const dispatch = useContext(SeedsDispatchContext);

  return (
    <>
      <h2 className="text-2xl mb-3">3. Select Chain Event Type</h2>
      <p className="text-xl mb-8">Kindly set a specific event type.</p>
      <Dropdown
        className="mb-12 bg-slate-900 text-white"
        placeholder="Select Event Type"
        fluid
        selection
        onChange={(_, data) => setEventType(`${data.value}`)}
        options={eventTypes}
      />
      <p className="flex flex-row-reverse">
        <button
          className="bg-rose-500 text-white font-bold py-3 px-4 ml-4 rounded-md leading-none"
          onClick={(e) => {
            e.preventDefault();
            eventType
              ? dispatch({ type: 'addEventType', data: { eventType } })
              : null;
          }}
        >
          Submit
        </button>
        <button
          className="text-rose-500 font-bold py-3 px-4 rounded-md leading-none"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'removeChain' });
          }}
        >
          Previous
        </button>
      </p>
    </>
  );
}

export default SelectEventType;
