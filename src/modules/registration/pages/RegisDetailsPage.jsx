import React from "react";
import SInfoCard from "../components/SInfoCard";
import NavBar from "../components/NavBar";

function RegisDetailsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main className="mx-auto p-6 w-4/5">
          <div className="grid grid-cols-2  bg-white p-6 shadow-md rounded-md">
            <div>
              <h2 className="text-2xl font-bold">Add Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                optio quidem ullam distinctio delectus ut id aliquam, earum
                fugit reprehenderit. Unde dolorum, molestiae ex nam odio
                architecto ratione eum rem!
              </p>
              <div className="divider"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Drop Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                optio quidem ullam distinctio delectus ut id aliquam, earum
                fugit reprehenderit. Unde dolorum, molestiae ex nam odio
                architecto ratione eum rem!
              </p>{" "}
              <div className="divider"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Grade Calculation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                optio quidem ullam distinctio delectus ut id aliquam, earum
                fugit reprehenderit. Unde dolorum, molestiae ex nam odio
                architecto ratione eum rem!
              </p>
              <div className="divider"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Transcript</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                optio quidem ullam distinctio delectus ut id aliquam, earum
                fugit reprehenderit. Unde dolorum, molestiae ex nam odio
                architecto ratione eum rem!
              </p>
              <div className="divider"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Core Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                optio quidem ullam distinctio delectus ut id aliquam, earum
                fugit reprehenderit. Unde dolorum, molestiae ex nam odio
                architecto ratione eum rem!
              </p>
              <div className="divider"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Elective Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                optio quidem ullam distinctio delectus ut id aliquam, earum
                fugit reprehenderit. Unde dolorum, molestiae ex nam odio
                architecto ratione eum rem!
              </p>
              <div className="divider"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default RegisDetailsPage;
