import { Autocomplete, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const Gener = [
  "Action",
  "Romance",
  "Dramas",
  "Thriller",
  "Horror",
  "Sci-fi",
  "Fantasy",
];
const Language = ["English", "Hindi", "Tamil", "Malayalam", "Kannada"];

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().min(10).max(50).required(),
  //   Genre: yup.array().required(),
  // director:yup.string().required(),
  // youtubeLink:yup.string().required(),
  // Language:yup.array().required(),
});

function EditMovieModel({ editModel, movie, seteditModel }) {
  // const { register, handleSubmit, setValue } = useForm();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  // Populate form fields with existing movie data
  setValue("title", movie?.title);
  setValue("description", movie?.description);
  setValue("director", movie?.director);
  setValue("genre", movie?.genre?.join(", "));
  setValue("language", movie?.language?.join(", "));
  // setValue('posterImg', movie?.posterImg);
  setValue("youtubeLink", movie?.youtubeLink);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.put(`http://localhost:3001/admin/editMovie/${movie._id}`, data);
      console.log(res.data); // Log updated movie data
      seteditModel(!editModel)
    } catch (error) {
      setError(error.response.data);
    }
  };

  // const submitForm = async(data) => {
  //   console.log("helloo",data);
  // };

  return (
    <>
      {editModel && (
        <div className="fixed left-50 right-50 z-50 items-center justify-center  overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full">
          <div className="relative w-full h-full max-w-2xl px-4  m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">
                  Add new user
                </h3>
                <button
                  type="button"
                  onClick={() => seteditModel(!editModel)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title   
                      </label>
                      <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register("title", { required: true })}
                        defaultValue={movie.title}
                        required
                      />
                      {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                       description
                      </label>
                      <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register("description", { required: true })}
                        defaultValue={movie.description}
                        required
                      />
                      {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                       director
                      </label>
                      <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register("director", { required: true })}
                        defaultValue={movie.director}
                        required
                      />
                      {errors.director && <span>This field is required</span>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                       genre
                      </label>
                      <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register("genre", { required: true })}
                        defaultValue={movie.genre}
                        required
                      />
                      {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                       language
                      </label>
                      <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register("language", { required: true })}
                        defaultValue={movie.language}
                        required
                      />
                      {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                       youtubeLink
                      </label>
                      <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register("youtubeLink", { required: true })}
                        defaultValue={movie.youtubeLink}
                        required
                      />
                      {errors.description && <span>This field is required</span>}
                    </div>
                  </div>

                  <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                    <button
                      className="text-white bg-blue-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit"
                      id="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditMovieModel;
