function Welcome({ onContinue }: any) {
  return (
    <>
      <h2 className="text-2xl md:text-4xl text-center mb-5 md:mb-12">
        Welcome to <span className="font-bold">Get Gas</span>
      </h2>
      <p className="text-lg md:text-2xl text-center mb-5 lg:max-w-xl lg:mx-auto md:mb-12">
        Get the gas price for 1-, 3-, and 5-minutes for specific event types on
        specific chains.
      </p>
      <p className="md:text-lg text-center mb-5 md:mb-12">
        To use, you will have to provide your{' '}
        <a
          href="https://covalenthq.com"
          className="text-rose-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Covalent
        </a>{' '}
        API Key to continue. If you don't have one, please kindly obtain yours{' '}
        <a
          href="https://www.covalenthq.com/platform/auth/register/"
          className="text-rose-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . After entering your API key, select the chain and then select the
        event type. You will then get the gas prices.
      </p>
      <p className="text-xs text-center mb-8">
        * We strongly uphold security and we don't share your Covalent API key.
        Your key is solely used for obtaining gas prices.
      </p>
      <p className="text-center mb-8">
        <button
          className="bg-rose-500 text-white font-bold py-3 px-4 rounded-md leading-none"
          onClick={onContinue}
        >
          Continue
        </button>
      </p>
    </>
  );
}

export default Welcome;
