import React, { useState } from "react";
import "./SchoolForm.css";

function SchoolForm() {
  //State variable for the form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [homeroom, setHomeroom] = useState("");
  const [studentId, setStudentId] = useState("");
  const [favoriteLunch, setFavoriteLunch] = useState("");

  //Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    //Update the state based on the input field name
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "homeroom":
        setHomeroom(value);
        break;
      case "studentId":
        setStudentId(value);
        break;
      case "favoriteLunch":
        setFavoriteLunch(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="school-form">
        <h2>School Administrator Form</h2>
        <form>
          <div>
            <label htmlFor="firstName" className="labelStyle">
              First Name:
            </label>
            <input
              className="input-box"
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="firstName" className="labelStyle">
              Last Name:
            </label>
            <input
              className="input-box"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              className="input-box"
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              className="input-box"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="homeroom">Homeroom Class Number:</label>
            <input
              className="input-box"
              type="text"
              id="homeroom"
              name="homeroom"
              value={homeroom}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="studentId">Student ID:</label>
            <input
              className="input-box"
              type="text"
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={handleInputChange}
            />
          </div>
          <div className="lunch-options">
            <div className="fav-option">
              <label>Favorite Lunch Option:</label>
            </div>
            <div className="container-option">
              <div className="lunch-option">
                <div>
                  <input
                    type="radio"
                    name="lunchOption1"
                    value="Pizza"
                    checked={favoriteLunch === "Pizza"}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lunchOption1" className="lunch-label">
                    Pizza
                  </label>
                </div>
              </div>
              <div className="lunch-option">
                <div>
                  <input
                    type="radio"
                    name="lunchOption2"
                    value="Burger"
                    checked={favoriteLunch === "Burger"}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lunchOption2" className="lunch-label">
                    Burger
                  </label>
                </div>
              </div>
              <div className="lunch-option">
                <div>
                  <input
                    type="radio"
                    name="lunchOption3"
                    value="Salad"
                    checked={favoriteLunch === "Salad"}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lunchOption3" className="lunch-label">
                    Salad
                  </label>
                </div>
              </div>
              <div className="lunch-option">
                <div>
                  <input
                    type="radio"
                    name="lunchOption4"
                    value="Sandwich"
                    checked={favoriteLunch === "Sandwich"}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lunchOption4" className="lunch-label">
                    Sandwich
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button type="submit">Submit</button>

        <div className="display-area">
          <h3>Inputted Values:</h3>
          <div className="display-item">
            <strong>First Name:</strong> {firstName}
          </div>
          <div className="display-item">
            <strong>Last Name:</strong> {lastName}
          </div>
          <div className="display-item">
            <strong>Age:</strong> {age}
          </div>
          <div className="display-item">
            <strong>Address:</strong> {address}
          </div>
          <div className="display-item">
            <strong>Homeroom Class:</strong> {homeroom}
          </div>
          <div className="display-item">
            <strong>Student ID:</strong> {studentId}
          </div>
          <div className="display-item">
            <strong>Favorite Lunch:</strong> {favoriteLunch}
          </div>
        </div>

        {/* Display inputted values */}
        {/*
        <h2>Student Information</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        <p>Homeroom Class Number: {homeroom}</p>
        <p>Student ID: {studentId}</p>
        <p>Student Favorite Lunch: {favoriteLunch}</p>
        */}
      </div>
    </>
  );
}

export default SchoolForm;
