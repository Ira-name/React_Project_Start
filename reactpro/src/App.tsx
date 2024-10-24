import "./App.css";
import BasicRoutes from "./routes/BasicRoutes";
import CategoriesList from "./features/categories/components/CategoryList";

function App() {
  return (
    <>
      <BasicRoutes />
      <CategoriesList />
    </>
  );
}

export default App;
