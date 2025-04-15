
import "./index.css"
import Profile from "./Components/Profile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import Connections from "./Components/Connections";
import Requests from "./Components/Requests";
import TermsnCondition from "./Components/TermsnCondition";
import Privacy from "./Components/Privacy";

const App = () => (
   
  <div>

<Provider store={appStore}>




    <BrowserRouter basename="/">

      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/termsncondition" element={<TermsnCondition />} />
          <Route path="/privacy" element={<Privacy />} />
     


        </Route>


      </Routes>



    </BrowserRouter>



  
    </Provider>
  </div>
)

export default App
