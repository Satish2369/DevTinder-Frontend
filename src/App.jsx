
import "./index.css"
import Profile from "./Components/Profile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";

const App = () => (
   
  <div>

<Provider store={appStore}>




    <BrowserRouter basename="/">

      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />




        </Route>


      </Routes>



    </BrowserRouter>



  
    </Provider>
  </div>
)

export default App
