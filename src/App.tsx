import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "./queries";
import AppBar from "./navigation/AppBar";
import AppRoutes from "./navigation/AppRoutes";

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;


  return (
    <>
   <AppBar/>
  <AppRoutes/>
    </>
  );
}

export default App;
