import { createContext, useReducer } from "react";

const initailState = {
  data: [
    {
      id: 1,
      name: "AMZN",
      marketCapValue: 100,
      marketCap: "Micro",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Options",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 2,
      name: "TSLA",
      marketCapValue: 150,
      marketCap: "Micro",
      rate: 0.25,
      riskLevel: "Low Risk",
      asset: "Options",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 3,
      name: "ABQQ",
      marketCapValue: 120,
      marketCap: "Micro",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Stocks",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 4,
      name: "MSFT",
      marketCapValue: 250,
      marketCap: "Large",
      rate: 1.25,
      riskLevel: "High Risk",
      asset: "Stocks",
      strategy: "Short Reports",
      investment: "WE",
    },
    {
      id: 5,
      name: "PYPL",
      marketCapValue: 180,
      marketCap: "Small",
      rate: 0.25,
      riskLevel: "Mid Risk",
      asset: "Options",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 6,
      name: "NFLX",
      marketCapValue: 220,
      marketCap: "Large",
      rate: 0.25,
      riskLevel: "High Risk",
      asset: "Stocks",
      strategy: "Big Option Buys",
      investment: "WE",
    },
    {
      id: 7,
      name: "Facebook",
      marketCapValue: 190,
      marketCap: "Small",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Options",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 8,
      name: "X",
      marketCapValue: 210,
      marketCap: "Large",
      rate: 2.25,
      riskLevel: "High Risk",
      asset: "Futures",
      strategy: "Short Reports",
      investment: "WE",
    },
    {
      id: 9,
      name: "Twitter",
      marketCapValue: 160,
      marketCap: "Small",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Stocks",
      strategy: "Big Option Buys",
      investment: "WE",
    },
    {
      id: 10,
      name: "AMZN",
      marketCapValue: 100,
      marketCap: "Micro",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Stocks",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 11,
      name: "TSLA",
      marketCapValue: 150,
      marketCap: "Small",
      rate: 0.25,
      riskLevel: "Mid Risk",
      asset: "Options",
      strategy: "Big Option Buys",
      investment: "WE",
    },
    {
      id: 12,
      name: "ABQQ",
      marketCapValue: 120,
      marketCap: "Micro",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Stocks",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 13,
      name: "MSFT",
      marketCapValue: 250,
      marketCap: "Large",
      rate: 1.25,
      riskLevel: "High Risk",
      asset: "Short Reports",
      strategy: "Short Reports",
      investment: "WE",
    },
    {
      id: 14,
      name: "PYPL",
      marketCapValue: 180,
      marketCap: "Small",
      rate: 0.25,
      riskLevel: "Mid Risk",
      asset: "Options",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 15,
      name: "NFLX",
      marketCapValue: 220,
      marketCap: "Large",
      rate: 0.25,
      riskLevel: "High Risk",
      asset: "Stocks",
      strategy: "Big Option Buys",
      investment: "WE",
    },
    {
      id: 16,
      name: "Facebook",
      marketCapValue: 190,
      marketCap: "Small",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Options",
      strategy: "Merger Arbitrage",
      investment: "WE",
    },
    {
      id: 17,
      name: "X",
      marketCapValue: 210,
      marketCap: "Large",
      rate: 2.25,
      riskLevel: "High Risk",
      asset: "Futures",
      strategy: "Short Reports",
      investment: "WE",
    },
    {
      id: 18,
      name: "Twitter",
      marketCapValue: 160,
      marketCap: "Small",
      rate: -0.25,
      riskLevel: "Low Risk",
      asset: "Stocks",
      strategy: "Big Option Buys",
      investment: "WE",
    },
  ],
  listOfFilter: [],
  filterSearch: [],
  filterTextSearch: "",
};

export const GlobalContext = createContext(initailState);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER": {
      return {
        ...state,
        listOfFilter: [
          ...state.listOfFilter,
          {
            id: action.id,
            industry: action.industry,
            marketCap: action.marketCap,
            riskLevel: action.riskLevel,
            strategy: action.strategy,
            asset: action.asset,
          },
        ],
      };
    }
    case "DELETE_FILTER": {
      return {
        ...state,
        listOfFilter: state.listOfFilter.filter((f) => f.id !== action.id),
      };
    }

    case "CLEAR_FILTER": {
      return {
        ...state,
        listOfFilter: [],
        filterSearch:[]
      };
    }
    case "GET_LIST_FILTER": {
      return {
        ...state,
        filterSearch: state.data.filter((f) =>
          f.name.toLowerCase().includes(action.name)
        ),
        filterTextSearch: action.name,
        statusFilter: "search",
      };
    }

    case "APPLY_FILTER": {
      

      return {
        ...state,
        filterSearch:initailState.data.filter(item => {
          return state.listOfFilter.some(filter => 
            item.asset === filter.asset &&
            item.marketCap === filter.marketCap &&
            item.riskLevel === filter.riskLevel &&
            item.strategy === filter.strategy
          );
        })
      };
    }

    default:
      return [...state];
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <GlobalContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
