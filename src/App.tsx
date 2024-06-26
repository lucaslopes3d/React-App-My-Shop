import { Provider } from "react-redux";
import { Header } from "./Components/Header/Header";
import { ProductsList } from "./Components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductsList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
