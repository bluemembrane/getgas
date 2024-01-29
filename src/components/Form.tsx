import { useContext, useState } from 'react';
import { SeedsContext } from '../state/seeds-context';
import ApiKeyInput from './ApiKeyInput';
import SelectChain from './SelectChain';
import SelectEventType from './SelectEventType';
import Welcome from './Welcome';

function Form() {
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const seeds = useContext(SeedsContext);

  return (
    <div className="flex justify-center align-center">
      <form className="max-w-sm md:max-w-lg lg:max-w-screen-md">
        {!hasWelcomed ? (
          <Welcome onContinue={() => setHasWelcomed(true)} />
        ) : !seeds.apiKey ? (
          <ApiKeyInput />
        ) : !seeds.chain ? (
          <SelectChain />
        ) : (
          <SelectEventType />
        )}
      </form>
    </div>
  );
}

export default Form;
