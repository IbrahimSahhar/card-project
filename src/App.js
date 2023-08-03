import { Header } from "./components/Header";
import ProductProvider from "./contexts/productContext";
import { Router } from "./router";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Header />
        <Router />
      </ProductProvider>
    </div>
  );
}

export default App;
