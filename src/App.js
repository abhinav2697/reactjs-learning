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
import UseReducerTodo from './components/UseReducerTodo';
import UseCallback from './components/UseCallBack/UseCallback';
import Usememo from './components/Usememo/Usememo';
import UseCallbackCounter from './components/UseCallBack/UseCallbackCounter';
import UseMemoCounter from './components/Usememo/UseMemoCounter';
import UseLayoutEffectHook from './components/UseLayoutEffectHook';
import UseLayoutSmoothScroll from "./components/UseLayoutSmoothscroll";
import UseLayoutAutoFocus from "./components/UseLayoutAutoFocus";
import ParentComponent from './components/UseImperativeHandle';
import UseDebugValueHook from './components/UseDebugValueHook';
import UseDebugValueData from './components/UseDebugValueData';
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
      <UseReducerObject />
      {"UseReducerTodo"}<br /><br />
      <UseReducerTodo /><br/>
      {"UseCallback"}<br />
      <UseCallback /><br/>
      {"Usememo"}<br/>
      <Usememo /><br />
      {"UseCallbackCounter"}<br />
      <UseCallbackCounter /><br />
      {"UseMemoCounter"}<br />
      <UseMemoCounter /><br />
      {"UseLayoutEffect"}<br />
      <UseLayoutEffectHook /><br />
      {"UseLayoutSmoothScroll"}<br />
      <UseLayoutSmoothScroll /><br />
      {"UseLayoutAutoFocus"}<br />
      <UseLayoutAutoFocus /><br />
      {"UseImperativeHandle"}<br />
      <ParentComponent /><br />
      {"UseDebugValueHook"}<br />
      <UseDebugValueHook /><br />
      {"UseDebugValueDataHook"}<br /><br/>
      <UseDebugValueData/>
    
      
    </>
  );
}

export default App;
