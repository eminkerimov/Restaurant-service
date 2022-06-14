import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import AllOrders from "./pages/AllOrders/AllOrders";
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import { getBlock } from "./store/actions/mainActions";
import "./App.scss"

function App(props) {
  React.useEffect(() => {
    props.getDataHandle();
  }, []);

  console.log(props.state);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all-orders" element={<AllOrders />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state.main.value,
    state: state.main,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDataHandle: () => dispatch(getBlock()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
