import React, { useRef, useLayoutEffect } from "react";

const UseLayoutAutoFocus = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
};

export default UseLayoutAutoFocus;