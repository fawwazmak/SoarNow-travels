// MultiStepForm.js
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Start from "../components/Start";
import AvailableAirlines from "../components/AvailableAirlines";
import TravelerInfo from "../components/TravelerInfo";
import SuccessfulBooking from "../components/SuccessfulBooking";

const Home = () => {
  const [formData, setFormData] = useState({
    userStartingPoint: "",
    userDestination: "",
    userDepartureDate: null,
    userReturnDate: null,
    noOfPassenger: null,
    userClass: "",
    nonStopFlight: false,
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const nextStep = (step) => navigate(step);
  const prevStep = (step) => navigate(step);

  const submitForm = () => {
    console.log(formData);
  };

  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <Start
    //         formData={formData}
    //         setFormData={setFormData}
    //         nextStep={() => nextStep("/AvailableAirlines")}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/AvailableAirlines"
    //     element={
    //       <AvailableAirlines
    //         formData={formData}
    //         setFormData={setFormData}
    //         nextStep={() => nextStep("/TravelerInfo")}
    //         prevStep={() => prevStep("/")}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/TravelerInfo"
    //     element={
    //       <TravelerInfo
    //         formData={formData}
    //         setFormData={setFormData}
    //         prevStep={() => prevStep("/AvailableAirlines")}
    //         submitForm={submitForm}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/SuccessfulBooking"
    //     element={
    //       <SuccessfulBooking
    //         formData={formData}
    //         setFormData={setFormData}
    //         prevStep={() => prevStep("/AvailableAirlines")}
    //         submitForm={submitForm}
    //       />
    //     }
    //   />
    // </Routes>
    <>
      <Start />
      <TravelerInfo />
    </>
  );
};

export default Home;
