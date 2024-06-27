import React from "react";
import "../App.css";

const Start = () => {
  return (
    <>
      <div className="text-light hero px-5">
        <div className="">
          <h1 className="text-center w-50 mx-auto">
            Great Deals on Flight Tickets to All Destinations with Mytrip USA
          </h1>
        </div>

        <form action="POST" className="bg-light text-dark rounded-3 row p-3">
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
            <input
              style={{ height: "50px" }}
              type="button"
              value="Submit"
              className="bg-success rounded-3 border-none"
            />

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
