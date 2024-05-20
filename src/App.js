import UseStateHook from './components/UseStateHook';
import UseStateHookObject from './components/UseStateHookObject';
import UseEffectHook from './components/UseEffectHook';
import UseEffectData from './components/UseEffectData';
import UseContext from './components/UseContext';
import UseRefHook from './components/UseRefHook';
import UseRefDom from './components/UseRefDom';
import UseRefState from './components/UseRefState';
import UseReducerHook from './components/UseReducerHook';
import UseReducerCounter from './components/UseReducerCounter';
import UseReducerObject from "./components/UseReducerObject";
function App() {
  return (
    <>
      {"UseStateHook"}
      <UseStateHook />
      <br/>
      {"useStateObject"}
      <UseStateHookObject />
      {"useeffect hook"}
      <UseEffectHook />
      <br /><br />
      <UseEffectData />
      <br /><br /><br />
      {"useContextHook"}
      <UseContext />
      <br /><br /><br />
      {"UseRefHook"}<br/>
      <UseRefHook />
      <br /><br />
      {"UseRefHookDom"}<br/>
      <UseRefDom />
      {"UseRefStateHook"}<br />
      <UseRefState />
      {"UseReducerHook"}<br /><br />
      <UseReducerHook />
      {"UseReducerHookCounter"}<br /><br />
      <UseReducerCounter />
      {"UseReducerObject"}<br /><br />
      <UseReducerObject/>
      
      
    </>
  );
}

export default App;
