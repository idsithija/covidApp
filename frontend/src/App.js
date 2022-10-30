import { useContext } from "react";
import Loading from "./components/Loading";
import { MainContext } from "./context/MainContext";
import RouteGaurd from "./Routes/Routes";

function App() {
  const { isFetching } = useContext(MainContext);
  return (
    <>
      <RouteGaurd />
      <Loading isFetching={isFetching} />
    </>
  );
}

export default App;
