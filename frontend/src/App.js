import { Route, Routes } from "react-router-dom";
import ContextProvider from "./store/ContextProvider.js";
import MainContainer from "./components/MainContainer/MainContainer.js";
import CreateItem from "./components/CreateItem/CreateItem.js";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <ContextProvider>
      <AnimatePresence>
        <Routes>
          <Route path='/*' element={<MainContainer />} />
          <Route path='/create' element={<CreateItem />} />
        </Routes>
      </AnimatePresence>
    </ContextProvider>
  );
}

export default App;
