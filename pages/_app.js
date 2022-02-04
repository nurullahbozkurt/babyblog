import "../styles/globals.css";
import { ContextProvider, useBabyBlog } from "../contexts/context";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { toggle } = useBabyBlog();
  useEffect(() => {
    if (toggle) {
      document.querySelector("html").classList.add("overflow-hidden");
    } else {
      document.querySelector("html").classList.remove("overflow-hidden");
    }
  }, [toggle]);
  return <Component {...pageProps} />;
}
const AppContext = (props) => {
  return (
    <ContextProvider>
      <MyApp {...props} />
    </ContextProvider>
  );
};

export default AppContext;
