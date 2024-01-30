import { Chains, CovalentClient } from '@covalenthq/client-sdk';
import { useContext, useEffect, useState } from 'react';
import chains from '../options/chains';
import eventTypes from '../options/event-types';
import { SeedsContext, SeedsDispatchContext } from '../state/seeds-context';

function GasPrices() {
  const [error, setError] = useState('');
  const [gases, setGases] = useState<{ when: String; price: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const seeds = useContext(SeedsContext);
  const dispatch = useContext(SeedsDispatchContext);

  const load = () => {
    setIsLoading(true);
    const client = new CovalentClient(seeds.apiKey);
    client.BaseService.getGasPrices(seeds.chain as Chains, seeds.eventType)
      .then(({ data, error, error_message }) => {
        if (error) setError(error_message);
        else
          setGases(
            data.items.map((i) => {
              const { pretty_total_gas_quote, interval } = i;
              return { when: interval, price: pretty_total_gas_quote };
            })
          );
      })
      .catch((e) => {
        setGases([]);
        setError(`${e}`);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    load();
    return () => {};
  }, [seeds]);

  return (
    <>
      {error ? (
        <>
          <p className="text-xl text-center mb-5">Something went wrong</p>{' '}
          <p className="text-lg text-center mb-8">{error}</p>{' '}
          <p className="text-center">
            <button
              className="bg-rose-500 text-white font-bold py-3 px-4 rounded-md leading-none"
              onClick={load}
            >
              Retry
            </button>
          </p>{' '}
        </>
      ) : isLoading ? (
        <p className="text-xl text-center">Loading ...</p>
      ) : gases.length == 0 ? (
        <>
          <p className="text-xl text-center mb-5">
            No Gas Prices at the moment.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl text-center mb-3">Gas Prices</h2>
          <div className="text-center font-bold text-lg mb-8 sm:mb-12">
            {chains.filter((c) => c.value == seeds.chain)[0].text}{' '}
            &nbsp;&nbsp;//&nbsp;&nbsp;
            {eventTypes.filter((et) => et.value == seeds.eventType)[0].text}
          </div>
          <div className="sm:flex justify-evenly items-center mx-auto w-fit sm:w-9/12 text-center">
            {gases.map(({ when, price }, i, arr) => (
              <>
                <div
                  className={
                    'mb-20 sm:mb-0 rounded-lg max-w-xl sm:border-none sm:mx-6'
                  }
                  key={i}
                >
                  <div className="p-4 pb-2 border-b-2 border-gray-500 text-lg text-rose-500 sm:border-none">
                    {when}
                  </div>
                  <div className="p-4 pt-2 text-2xl font-bold">{price}</div>
                </div>
                {i < arr.length - 1 ? (
                  <div className="hidden sm:block w-1 bg-gray-700 h-20"></div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </>
      )}

      <div className="text-center mt-12 mb-5">
        {' '}
        <button
          className="text-rose-500 bg-slate-900 text-lg font-bold py-3 px-4 rounded-md leading-none"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default GasPrices;
