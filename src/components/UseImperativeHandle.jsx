import React, { useRef, useImperativeHandle, forwardRef } from 'react';
const ChildComponent = forwardRef((props, ref) => {
    const internalRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            internalRef.current.focus();
        },
        getValue: () => {
            return internalRef.current.value;
        }
    }))
    return <input ref={internalRef} />;
});

const ParentComponent = () => {
    const childRef = useRef(null);
    const handleClick = () => {
        childRef.current.focus();
    };
    const handleGetValue = () => {
        const value = childRef.current.getValue();
        console.log(value);
    };
    return (
        <div>
            <ChildComponent ref={childRef} />
            <button onClick={handleClick}>Focus Input</button>
            <button onClick={handleGetValue}>Get Value</button>
        </div>
    )
}

export default ParentComponent;