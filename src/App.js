import { connect } from 'react-redux';
import { SET_VALUE } from './store/actions/actionTypes';
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
