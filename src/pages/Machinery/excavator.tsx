import React from "react";

const Excavator1 = new URL("../../../img/JCB.jpg", import.meta.url).href;
const Excavator2 = new URL("../../../img/MotorGrader.jpg", import.meta.url)
  .href;
const Excavator3 = new URL("../../../img/RoadRoller.jpg", import.meta.url).href;
const Excavator4 = new URL("../../../img/Tipper.jpg", import.meta.url).href;
const Excavator5 = new URL("../../../img/machine1.jpeg", import.meta.url).href;

export default function Excavator() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="md:w-1/2 w-full">
            <img
              src={Excavator5}
              alt="Excavator vehicle"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow"
            />
          </div>

          <div className="md:w-1/2 w-full text-left">
            <h1 className="text-3xl font-bold mb-2">Excavator</h1>
            <p className="text-sm text-gray-600 mb-4">
              Registered vehicle: 2016,2015,2014,2013
            </p>

            <div className="text-gray-800 space-y-3">
              <p>
                <strong>Make:</strong> JCB
              </p>
              <p>
                <strong>Bulk of site:</strong> 320 / 300 / 280
              </p>

              <div>
                <h2 className="font-semibold mt-2">Details</h2>
                <p>
                  Well-maintained backhoe loader with recent service history.
                  Includes loader bucket, backhoe, and stabilizers. Ideal for
                  medium-duty excavation and loading tasks.
                </p>
              </div>
              <div>
                <p className="text-orange-800 font-medium">
                  <strong className="text-gray-900">Call to Book:</strong>{" "}
                  <a>0777778470</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[Excavator1, Excavator2, Excavator3, Excavator4, Excavator5].map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`JCB gallery image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow"
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
