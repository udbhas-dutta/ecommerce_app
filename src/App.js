import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/Homepage/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
        <div>
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
