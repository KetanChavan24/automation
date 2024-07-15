import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function App() {
  // State variables
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [inputFields, setInputFields] = useState([]);
  const [showCityDropdown, setShowCityDropdown] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showTerms, setShowTerms] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      fname,
      lname,
      gender: selectedRadio === "flexRadioDefault1" ? "Male" : "Female",
      terms: isCheckboxChecked,
      additionalFields: inputFields.map(field => ({
        name: field.name,
        value: document.getElementsByName(field.name)[0].value
      }))
    };

    // Display form data as JSON
    setSubmittedData(formData);
    console.log("Form submitted!", formData);
  };

  // Add new input field
  const handleAddInput = () => {
    const newInput = {
      id: inputFields.length + 1,
      name: `inputField${inputFields.length + 1}`,
      placeholder: `Input Field ${inputFields.length + 1}`,
    };
    setInputFields([...inputFields, newInput]);
  };

  // Delete input field by ID
  const handleDeleteInput = (id) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="first">
            <div className="osha">
              <label htmlFor="fname"></label>
              <br />
              <input
                placeholder="First name"
                type="text"
                id="fname"
                name="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="chota">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setFname("")}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="second">
            <div className="osha">
              <label htmlFor="lname"></label>
              <input
                placeholder="Last name"
                type="text"
                id="lname"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="chota">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setLname("")}
              >
                Delete
              </button>
            </div>
          </div>

          {showCityDropdown && (
            <div className="third">
              <div className="osha">
                <div className="dropdown mt-3">
                  <DropdownButton id="dropdown-basic-button" title="City name">
                    <Dropdown.Item href="#">Mumbai</Dropdown.Item>
                    <Dropdown.Item href="#">Nagpur</Dropdown.Item>
                    <Dropdown.Item href="#">Nashik</Dropdown.Item>
                    <Dropdown.Item href="#">Pune</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <div className="chota" id="chotadrop">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setShowCityDropdown(false)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          {showGender && (
            <div className="fourth">
              <div className="osha">
                <label>Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={selectedRadio === "flexRadioDefault1"}
                    onChange={() => setSelectedRadio("flexRadioDefault1")}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked={selectedRadio === "flexRadioDefault2"}
                    onChange={() => setSelectedRadio("flexRadioDefault2")}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
              <div className="chota" id="chotagender">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setShowGender(false)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          {showTerms && (
            <div className="fifth">
              <div className="osha">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                    checked={isCheckboxChecked}
                    onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    Terms and conditions applied
                  </label>
                </div>
              </div>
              <div className="chota">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setShowTerms(false)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          <div className="sixth">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>

          <div className="seventh">
            <div id="inputContainer">
              {inputFields.map((field) => (
                <div key={field.id} className="input-group mb-3">
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    className="form-control"
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteInput(field.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              id="addInputButton"
              onClick={handleAddInput}
              className="btn btn-secondary"
            >
              Add Input Field
            </button>
          </div>
        </div>
      </form>

      {submittedData && (
        <div className="json-output mt-3">
          <h4>Submitted Data:</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
