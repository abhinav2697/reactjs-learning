import React from 'react';
const authContext = React.createContext({ stats: null, login: () => { } });
export default authContext;