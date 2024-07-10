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
import CustomHookData from './components/CustomHooks/CustomHookData';
// import LocalStorage from "./components/CustomHooks/LocalStorage";
import Event from "./components/events/Event";
import OnPaste from "./components/events/OnPaste";
import OnInput from "./components/events/OnInput";
import OnCut from './components/events/OnCut';
import OnFocus from './components/events/OnFocus';
import OnMouseUp from './components/events/OnMouseUp';
import Onsubmit from './components/events/Onsubmit';
import Onscroll from './components/events/Onscroll';
import OnKeyUp from './components/events/OnKeyUp';
import OnPointerUp from './components/events/OnPointerUp';
import OnMouseEnter from './components/events/OnMouseEnter';
import AxiosCrud from './components/Axios/AxiosCrud';
import StyleObject from './components/StylingCss/StyleObject';
import  StyleExpression  from './components/StylingCss/StyleExpression';
import StyledComponents from './components/StylingCss/StyledComponents';
import InlineStyles from './components/StylingCss/InlineStyles';
import UserCardComponent from './components/StylingCss/UserCardComponent';
import StyledModule from './components/StylingCss/StyledModule';
import ButtonModule from './components/StylingCss/ButtonModule';
import RouteExample from './components/Router/RouteExample';
// import AppLayout from './components/Router/Pages/AppLayout';
import Form from './components/Form/Form';
import FormReact from './components/Form/FormReact';
// import PrivateRoutes from './components/Router/Pages/PrivateRouter/PrivateRoutes';
import ControlledForm from './components/Form/ControlledForm';
import ControlledSelectForm from "./components/Form/ControlledSelectForm";
import ControlledCheckboxForm from './components/Form/ControlledCheckboxForm';
// import YoutubeForm from './components/Form/YoutubeForm';
import HookForm from './components/Form/HookForm';

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
      <UseDebugValueData /><br />
      {"CustomHookData"}<br />
      <CustomHookData /><br />
      {/* {"LocalStorageCustomHook"}<br />
      <LocalStorage /><br /> */}
      <hr />
      {"React events"}<br />
      <Event/>
      {"OnPasteEvent"}<br />
      <OnPaste />
      {"OnInputEvent"}<br />
      <OnInput />
      {"OnCut"}<br />
      <OnCut />
      {"OnFocus"}<br />
      <OnFocus /><br />
      {"OnMouseUp"}<br />
      <OnMouseUp /><br />
      {"Onsubmit"}<br />
      <Onsubmit />
      {"OnScroll"}<br />
      <Onscroll />
      {"OnKeyUp"}<br />
      <OnKeyUp />
      {"OnPointerUp"}<br />
      <OnPointerUp />
      {"OnMouseEnter"}<br />
      <OnMouseEnter /><hr></hr>
      {"Axios Crud"}<br /><br />
      <AxiosCrud />
      {"React CSS"}<br />
      <StyleObject />
      <StyleExpression />
      <StyledComponents />
      <InlineStyles />
      <UserCardComponent/>
      <StyledModule />
      <ButtonModule /><br /><br />
      <h2>{"React Router"}</h2>
      <RouteExample />
      {/* <AppLayout/> */}
      <h2>{"React Form"}</h2>
      <Form />
      <FormReact />
      {/* <PrivateRoutes /> */}
      <ControlledForm />
      <ControlledSelectForm />
      <ControlledCheckboxForm />
      <YoutubeForm/> 
       <HookForm/> 
    </>
  );
}

export default App;
