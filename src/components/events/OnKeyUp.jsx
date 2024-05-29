import { useState } from "react";
const OnKeyUp = () => {
    const [key, setKey] = useState();
    const keyUp = (event) => {
        setKey(event.key)
        console.log(event.key);
    }
    const keyPress = (event) => {
        console.log(event.key);
    }
    return (
        <div className="OnKeyUp">
            <h1>On key UP</h1>
            {key ? <h2>Key Up:{key}</h2> : null}
            <input type='text'
                onKeyUp={keyUp}
                onKeyDown={keyUp}
                onKeyPres={keyPress}
                placeholder="Press & Release key here...">
                
            </input>
        </div>
    )
}

export default OnKeyUp;