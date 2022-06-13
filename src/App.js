import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import AllOrders from "./pages/AllOrders/AllOrders";
import { SET_VALUE } from "./store/actions/actionTypes";
import CreateOrder from "./pages/CreateOrder/CreateOrder";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.value}</p>
        <input
          value={props.value}
          onChange={(e) => {
            let target = e.target.value;
            props.changeValue(target);
          }}
        />
        <p>EMIN</p>
      </header>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all-orders" element={<AllOrders />} />
          <Route path="/create-order" element={<CreateOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state.main.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeValue: (val) => dispatch({ type: SET_VALUE, payload: val }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
