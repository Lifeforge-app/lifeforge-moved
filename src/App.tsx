import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://docs.lifeforge.dev");
  }, []);

  return <>301 Moved Permanently</>;
}

export default App;
