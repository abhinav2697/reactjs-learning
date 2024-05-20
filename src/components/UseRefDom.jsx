import React,{useRef} from 'react';
function UseRefDom() {
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
    }
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog.";
        focusPoint.current.focus();
    };

  
    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button><br/><br/><br/>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
        </>
    );
}

export default UseRefDom;