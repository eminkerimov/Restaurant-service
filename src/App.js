import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import { SET_VALUE } from "./store/actions/actionTypes";
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
          <Route path="/courier-order" element={<Page1 />} />
          <Route path="/ordinary-order" element={<Page2 />} />
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
