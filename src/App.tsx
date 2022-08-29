import AppRoutes from "./router/AppRoutes";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <AppRoutes />
    </div>
  );
};

export default App;
