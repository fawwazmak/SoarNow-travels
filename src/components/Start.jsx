import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

const Start = () => {
  const [travelType, setTravelType] = useState("return");

  const travelTypeChange = (e) => {
    setTravelType(e.target.value)
  }

  return (
    <>
      <div className="text-light hero px-5 bg-primary py-5">
        <div className="">
          <h1 className="text-center w-50 mx-auto">
            Great Deals on Flight Tickets to All Destinations with Mytrip USA
          </h1>
        </div>

        <form action="POST" className="bg-light text-dark rounded-3 row p-3">
          {/* Travel type  */}
          <div className="d-flex gap-3 flex-sm-row flex-column mb-3">
            <div className="d-flex gap-2">
              <input className="d-block" checked={travelType === 'return'} onChange={travelTypeChange} value="return" type="radio" name="travel-type" id="return" />
              <label className="d-block" htmlFor="return">Return</label>
            </div>

            <div className="d-flex gap-2">
              <input className="d-block" checked={travelType === 'one way'} onChange={travelTypeChange} value="one way" type="radio" name="travel-type" id="one-way" />
              <label className="d-block" htmlFor="one-way">One-Way</label>
            </div>
            
            <div className="d-flex gap-2">
              <input className="d-block" checked={travelType === 'multi city'} onChange={travelTypeChange} value="multi city" type="radio" name="travel-type" id="multi-city" />
              <label className="d-block" htmlFor="multi-city">Multi-City</label>
            </div>
          </div>



          <div className="col-lg-8 row">
            <label className="col-lg-6 col-12 d-flex flex-column">
              From
              <input
                style={{ height: "50px" }}
                type="text"
                placeholder="From"
              />
            </label>

            <label className="col-lg-6 col-12 d-flex flex-column">
              To
              <input style={{ height: "50px" }} type="text" placeholder="To" />
            </label>


            {/* This will display for multi-city choice only  */}
            
            <label className="col-lg-6 col-12 d-flex flex-column">
              Departure
              <input
                style={{ height: "50px" }}
                type="date"
                placeholder="Departure"
              />
            </label>

            <label className="col-lg-6 col-12 d-flex flex-column">
              Return
              <input
                style={{ height: "50px" }}
                type="date"
                placeholder="Return"
              />
            </label>

            <label className="col-lg-6 col-12 d-flex flex-column">
              Passengers
              <input
                style={{ height: "50px" }}
                type="text"
                placeholder="Passengers"
              />
            </label>
            <label className="col-lg-6 col-12 d-flex flex-column">
              Economy
              <input
                style={{ height: "50px" }}
                type="text"
                placeholder="Economy"
              />
            </label>
          </div>

          <div className="col-lg-4 d-flex flex-column-reverse flex-lg-column justify-content-between">
            <Button btnText="Submit" classB={"mt-4 mt-lg-0"} />

            <label className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                style={{ height: "30px", width: "30px" }}
                name="Non-stop"
                id="non-stop"
              />
              Nonstop flights only
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Start;