import { createContext, useState } from "react";

export const ChatContext = createContext([]);

export const ChatProvider = ({ children }) => {
  const [showElement, setShowElement] = useState();

  return (
    <ChatContext.Provider value={{ showElement, setShowElement }}>
      {children}
    </ChatContext.Provider>
  );
};
