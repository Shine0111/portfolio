import { createContext, ReactNode, useContext, useState } from "react";

// Define the type for the context
interface HashContextType {
  hash: string;
  setHash: (hash: string) => void;
}

// Create the context
const HashContext = createContext<HashContextType>({
  hash: "",
  setHash: () => {},
});

// Create a provider component to wrap your application
export const HashProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [hash, setHash] = useState("");

  return (
    <HashContext.Provider value={{ hash, setHash }}>
      {children}
    </HashContext.Provider>
  );
};

export const useHash = () => useContext(HashContext);
