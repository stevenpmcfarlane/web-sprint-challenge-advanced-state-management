import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf, setError } from "./../actions/"; //Import error stuff!!

const AddForm = (props) => {
  const { errorMessage, setError, addSmurf } = props;
  const [smurf, setSmurf] = useState({
    name: "",
    position: "",
    nickname: "",
    description: "",
  });

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

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
