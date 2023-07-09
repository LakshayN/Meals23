import Meals from "../Meals/Meals";
import Header from "../Topbar/Header";
import HomeContainer from "./HomeContainer";

function App() {
  return (
    <>
      <div className=''>
        <Header />
      </div>

      <div className='pt-20'>
        <HomeContainer />
        <Meals />
      </div>
    </>
  );
}

export default App;
