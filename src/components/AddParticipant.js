import React, { useState } from "react";
import axios from "axios";
import "../styles/AddParticipant.css";

const AddParticipant = () => {
  const initialState = {
    fields: {
      name: "",
      toBring: "",
      dislikes: "",
      dietInfo: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddPerson = (e) => {
    e.preventDefault();

    axios

      // /events/:eventId/participants
      .post("https://final-mcrcodes-project.herokuapp.com/events", fields)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="addParticipant">
      <h2>Add your participants</h2>
      <p>Fill in all fields and click "create event"</p>

      {/* form starts */}
      <form onSubmit={handleAddPerson}>
        <div className="participantName">
          <label htmlFor="participantName">
            Name <br />
            <input
              type="text"
              id="participantName"
              name="participantName"
              value={fields.participantName}
              onChange={handleFieldChange}
              placeholder="Name of fellow Party Queen..."
            />
          </label>
        </div>

        <div className="toBring">
          <label htmlFor="toBring">
            I am bringing... <br />
            <input
              type="text"
              id="toBring"
              name="toBring"
              value={fields.toBring}
              onChange={handleFieldChange}
              placeholder="Ferrero Rocher"
            />
          </label>
        </div>

        <div className="dislikes">
          <label htmlFor="dislikes">
            I don't like... <br />
            <input
              type="text"
              id="dislikes"
              name="dislikes"
              value={fields.dislikes}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="dietInfo">
          <label htmlFor="dietInfo">
            Diet info <br />
            <input
              type="text"
              id="dietInfo"
              name="dietInfo"
              value={fields.dietInfo}
              onChange={handleFieldChange}
              placeholder="Vegetarian? Kosher? Coeliac?"
            />
          </label>
        </div>

        <div className="createEventButton">
          <button className="addButton" type="submit">
            Add
          </button>
        </div>
      </form>
      {/* form ends */}
    </div>
  );
};

export default AddParticipant;
