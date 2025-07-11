import React from "react";
import { FaArrowLeft, FaMapMarker, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import bgImage from "../assets/images/background.jpg";

const AttractionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const attraction = useLoaderData();

  const onDeleteClick = () => {

  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/attractions"
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Attractions
          </Link>
        </div>
      </section>
      <section
        className="bg-no-repeat bg-cover bg-top min-h-screen px-4 py-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container m-auto py-10 px-6">
          <div className="flex flex-col md:flex-row w-full gap-6">
            <aside className="w-full md:w-[30%]">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="h-full">
                  <img
                    className="object-cover rounded-lg h-full w-full"
                    src={attraction.image}
                    alt="Local Explorer"
                  />
                </div>
              </div>
              {/* <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                <div className="flex justify-center md:justify-start gap-4 items-center">
                  <Link
                    to={`/edit-attraction/${attraction.id}`}
                    className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white text-base text-center font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Edit Sight
                  </Link>
                  <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-base font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    Delete Sight
                  </button>
                </div>
              </div> */}
            </aside>
            <main className="w-full md:w-[70%]">
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left relative">
                {/* <div className="text-gray-500 mb-4">{attraction.name}</div> */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h1 className="text-3xl font-bold">{attraction.name}</h1>
                  <div className="flex gap-3 mt-2 md:mt-0">
                    <Link
                      to={`/edit-attraction/${attraction.id}`}
                      className="text-indigo-500 hover:text-indigo-700"
                      title="Edit"
                    >
                      <FaEdit size={20} />
                    </Link>
                    <button
                      onClick={() => 
                        onDeleteClick(attraction.id)
                      }
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>

                <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{attraction.city}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-red-800 text-lg font-bold mb-6">
                  Description
                </h3>
                <p className="mb-4">{attraction.description}</p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

const attractionLoader = async ({ params }) => {
  const res = await fetch(`/api/attractions/${params.id}`);
  const data = await res.json();
  return data;
};

export { AttractionPage as default, attractionLoader };
