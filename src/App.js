import UseStateHook from './components/UseStateHook';
import UseStateHookObject from './components/UseStateHookObject';
import UseEffectHook from './components/UseEffectHook';
import UseEffectData from './components/UseEffectData';
import UseContext from './components/UseContext';
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
      
      <br />
      <br />
      <br />
      {"useContextHook"}
      <UseContext />
    </>
  );
}

export default App;
