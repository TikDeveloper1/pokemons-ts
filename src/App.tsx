import { Provider } from "react-redux";
import AppRoutes from "./router/AppRoutes";
import { store } from "./store";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <GlobalStyles />
        <AppRoutes />
      </div>
    </Provider>
  );
};

export default App;
