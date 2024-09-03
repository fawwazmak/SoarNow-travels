import React, { useState } from "react";
import "../App.css";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { LuArrowDownToDot } from "react-icons/lu";
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

       <form action="" method="post" id="form" className="bg-white p-4 rounded mx-auto">

        {/* Travel type  */}
        <div className="d-flex gap-3 flex-sm-row flex-column">
          <div className="d-flex gap-2">
            <input className="d-block" checked={travelType === 'return'} onChange={travelTypeChange} value="return" type="radio" name="travel-type" id="return" />
            <label className="d-block text-black" htmlFor="return">Return</label>
          </div>

          <div className="d-flex gap-2">
            <input className="d-block" checked={travelType === 'oneWay'} onChange={travelTypeChange} value="oneWay" type="radio" name="travel-type" id="one-way" />
            <label className="d-block text-black" htmlFor="one-way">One-Way</label>
          </div>
            
          <div className="d-flex gap-2">
            <input className="d-block" checked={travelType === 'multiCity'} onChange={travelTypeChange} value="multiCity" type="radio" name="travel-type" id="multi-city" />
            <label className="d-block text-black" htmlFor="multi-city">Multi-City</label>
          </div>
        </div>

        {(travelType !== 'multiCity') && 
          <>
              <div className="text-dark row g-3 mt-3">
                <div className="col-lg-9">
                  <div className="d-flex flex-lg-row flex-column gap-lg-5 gap-2">
                    <div className="w-100">
                      <label htmlFor="startingLocation">From</label>
                      <div className="border border-1 border-dark px-2 py-2 d-flex align-items-center">
                        <LuArrowUpRightFromCircle />
                        <input required className="border-0 w-100" type="text" name="startingLocation" id="startingLocation" />
                      </div>
                    </div>
                    <div className="w-100">
                      <label htmlFor="stoppingLocation">To</label>
                      <div className="border border-1 border-dark px-2 py-2 d-flex align-items-center">
                        <LuArrowDownToDot />
                        <input required className="border-0 w-100" type="text" name="stoppingLocation" id="stoppingLocation" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-lg-row flex-column gap-lg-5 gap-2">
                    {/* Deaparture and return  */}
                    <div className="d-flex w-100">
                      {/* DepartTure date  */}
                      <div className="w-100">
                        <label htmlFor="departureDate">Departure</label>

                        <div className="border-1 border-dark border py-2 px-2">
                          <input required className="border-0 w-100" type="date" name="departureDate" id="departureDate" />
                        </div>
                      </div>

                      { (travelType === 'return') &&
                        <>
                          {/* Return date  */}
                          <div className="w-100">
                            <label htmlFor="returnDate">Return</label>

                            <div className="border-1 border-dark border py-2 px-2">
                              <input required className="border-0 w-100" type="date" name="returnDate" id="returnDate" />
                            </div>
                          </div>
                        </>
                      }
                    </div>

                    {/* Passengers and class  */}
                    <div className="d-flex gap-2 gap-lg-0 flex-column flex-lg-row w-100">

                      {/* Number of passengers  */}
                      <div className="w-100">
                        <label htmlFor="passengers">Passengers</label>

                        <div className="border-1 border-dark border p-2">
                          <input required className="border-0 w-100" type="text" name="passengers" id="passengers" />
                        </div>
                      </div>

                      {/* Travel class  */}
                      <div className="w-100">
                        <label htmlFor="travelClass">Class</label>

                        <div className="border-1 border-dark border p-2">
                          <select name="travelClass" id="travelClass" className="border-0 w-100" required>
                            <option value="economy">Economy</option>
                            <option value="premium">Premium</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checkbox and submit buton  */}
                <div className="col d-flex flex-column flex-lg-column-reverse gap-2 gap-lg-0 justify-content-lg-between">
                  <div className="d-flex gap-2">
                    <input className="" style={{height: "25px", width: "25px"}} type="checkbox" name="nonStopFlight" id="nonStopFlight" />
                    <label htmlFor="nonStopFlight">Nonstop Flights only</label>
                  </div>

                  <input className="border-0 py-2 bg-success text-white rounded-3" type="submit" value="Search Flights" />
                </div>
              </div>
          </>
          
        }

        <small className="text-success ">**( Specify Passenger(s): adult, children, infant )</small>
       </form>
      </div>
    </>
  );
};

export default Start;