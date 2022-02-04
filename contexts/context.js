import { createContext, useContext } from "react";
import { useState } from "react";

const BabyBlogContext = createContext();
const useBabyBlog = () => useContext(BabyBlogContext);

const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <BabyBlogContext.Provider value={{ toggle, setToggle }}>
      {children}
    </BabyBlogContext.Provider>
  );
};
export { ContextProvider, useBabyBlog };
