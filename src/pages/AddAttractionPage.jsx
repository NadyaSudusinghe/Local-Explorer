import React, { useState } from "react";
import bgImage from "../assets/images/background.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAttractionPage = ({addAttraction}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [image, setImageURL] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newAttraction = {
        name,
        city,
        description,
        image
    }
    addAttraction(newAttraction);
    toast.success('Sight added successfully!');
    return navigate('/attractions');
  };

  return (
    <section
      className="bg-no-repeat bg-cover bg-top min-h-screen px-4 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Attraction
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Name of the Attraction
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Planten un Blomen"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Location of the attraction"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Image
              </label>
              <input
                type="url"
                id="image"
                name="image"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Image URL"
                required
                value={image}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Attraction
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddAttractionPage;
