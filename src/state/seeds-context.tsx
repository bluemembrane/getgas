import { Dispatch, createContext, useReducer } from 'react';

export interface Seeds {
  apiKey: string;
  chain: string;
  eventType: string;
}

export interface Action {
  type: string;
  data: Partial<Seeds> | undefined;
}

const empty: Seeds = {
  apiKey: '',
  chain: '',
  eventType: ''
};

export const SeedsContext = createContext<Seeds>(null as any);
export const SeedsDispatchContext = createContext<Dispatch<Action>>(
  null as any
);

export function SeedsProvider({ children }: any) {
  const [seeds, dispatch] = useReducer(seedsReducer, empty);

  return (
    <SeedsContext.Provider value={seeds}>
      <SeedsDispatchContext.Provider value={dispatch}>
        {children}
      </SeedsDispatchContext.Provider>
    </SeedsContext.Provider>
  );
}

function seedsReducer(seeds: Seeds, action: Action): Seeds {
  switch (action.type) {
    case 'addApiKey': {
      if (!action.data || !('apiKey' in action.data!)) {
        throw Error('Provide apiKey in data');
      }
      return { ...seeds, apiKey: action.data.apiKey! };
    }
    case 'removeApiKey': {
      return { ...seeds, apiKey: '' };
    }
    case 'addChain': {
      if (!action.data || !('chain' in action.data!)) {
        throw Error('Provide chain in data');
      }
      return { ...seeds, chain: action.data.chain! };
    }
    case 'removeChain': {
      return { ...seeds, chain: '' };
    }
    case 'addEventType': {
      if (!action.data || !('eventType' in action.data!)) {
        throw Error('Provide eventType in data');
      }
      return { ...seeds, eventType: action.data.eventType! };
    }
    case 'removeEventType': {
      return { ...seeds, eventType: '' };
    }
    case 'empty': {
      return { ...empty };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
