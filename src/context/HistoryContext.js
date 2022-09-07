import { createContext, useState } from "react";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
    const bim_history = JSON.parse(localStorage.getItem("bim_history"));
    const [history, setHistory] = useState(bim_history ? bim_history : []);
    const values = { history, setHistory };
    return (<HistoryContext.Provider value={values}>{children}</HistoryContext.Provider>);

}

export default HistoryContext;
