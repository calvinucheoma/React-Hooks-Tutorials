// import { createContext, useReducer } from 'react';
import './App.css';
// import CounterOne from './components/customHook/CounterOne';
// import CounterTwo from './components/customHook/CounterTwo';
import UserForm from './components/customHook/UserForm';
// import ClassTimer from './components/useRef/ClassTimer';
// import HookTimer from './components/useRef/HookTimer';
// import FocusInput from './components/useRef/FocusInput';
// import ParentComponent from './components/useCallback/ParentComponent';
// import Counter from './components/useMemo/Counter';
// import DataFetchingOne from './components/useReducer/DataFetchingOne';
// import DataFetchingTwo from './components/useReducer/DataFetchingTwo';
// import ComponentA from './components/useContext+useReducer/ComponentA';
// import ComponentB from './components/useContext+useReducer/ComponentB';
// import ComponentC from './components/useContext+useReducer/ComponentC';
// import CounterThree from './components/useReducer/CounterThree';
// import CounterTwo from './components/useReducer/CounterTwo';
// import CounterOne from './components/useReducer/CounterOne';
// import { createContext } from 'react';
// import ComponentC from './components/useContext/ComponentC';
// import DataFetching from './components/useEffect/DataFetching';
// import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import MouseContainer from './components/MouseContainer';
// import HookMouse from './components/HookMouse';
// import ClassCounterOne from './components/ClassCounterOne-Effect';
// import ClassMouse from './components/ClassMouse';
// import HookCounterOne from './components/HookCounterOne-Effect';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import ClassCounterTwo from './components/ClassCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import DocTitleOne from './components/customHook/DocTitleOne';
// import DocTitleTwo from './components/customHook/DocTitleTwo';

// export const UserContext = createContext();
// export const ChannelContext = createContext();

// export const CountContext = createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <ClassCounter />
      <ClassCounterTwo />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}
      {/* <ClassCounterOne />
      <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Chuks'}>
        <ChannelContext.Provider value={'Codedev'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
  );
}

export default App;
