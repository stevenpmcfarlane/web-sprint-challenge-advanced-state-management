import React, { useState } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { addSmurf, setError } from "./../actions/"; //Import error stuff!!

const AddForm = (props) => {
  const { errorMessage, setError, addSmurf } = props;
  const [smurf, setSmurf] = useState({
=======

const AddForm = (props) => {
  const [state, setState] = useState({
>>>>>>> cfe2d381847646df8cac3f5e9210fc252a3a67f9
    name: "",
    position: "",
    nickname: "",
    description: "",
  });
<<<<<<< HEAD

  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (smurf.name === "" || smurf.position === "" || smurf.nickname === "") {
      setError();
      return;
    }
    addSmurf(smurf);
  };

  return (
    <section>
      <h2>Add Smurf</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={smurf.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={smurf.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />

          <input
            onChange={handleChange}
            value={smurf.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={smurf.description}
            name="description"
            id="description"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit Smurf
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.add.error,
  };
};

export default connect(mapStateToProps, { addSmurf, setError })(AddForm);
=======

  const handleChange = (e) => {
    setState({
      //teacher note to spread in state?
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.position === "" || state.nickname === "") {
      errorMessage = "Name, position and nickname fields are required.";
    }
  };

  const errorMessage = "";

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button>Submit Smurf</button>
      </form>
    </section>
  );
};

export default AddForm;
>>>>>>> cfe2d381847646df8cac3f5e9210fc252a3a67f9

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
