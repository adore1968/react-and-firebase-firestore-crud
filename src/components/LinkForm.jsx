"use client";
import { useAppContext } from "@/context/AppContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLink, AiOutlineEdit } from "react-icons/ai";

function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { createLink, updateLink, getLink } = useAppContext();

  const params = useParams();
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const { url, name, description } = getLink(id);
      setValue("url", url);
      setValue("name", name);
      setValue("description", description);
    }
  }, [id]);

  const onSubmit = handleSubmit((data) => {
    if (!id) createLink(data);
    else updateLink(id, data);
    reset();
    router.push("/");
  });

  return (
    <form
      className="bg-gray-50 text-gray-950 flex flex-col flex-auto max-w-xl gap-5 p-5"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center">
          <label
            htmlFor="url"
            className="sm:text-2xl text-gray-50 px-4 py-2.5 text-xl font-medium bg-gray-500 rounded-l"
          >
            <AiOutlineLink />
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://someurl.com"
            className="sm:text-xl bg-gray-950 flex-1 px-4 py-2 text-lg text-gray-200 rounded-r"
            {...register("url", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
        </div>
        {errors.url && (
          <p className="sm:text-xl text-lg text-red-600">
            {errors.url.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center">
          <label
            htmlFor="name"
            className="sm:text-2xl text-gray-50 px-4 py-2.5 text-xl font-medium bg-gray-500 rounded-l"
          >
            <AiOutlineEdit />
          </label>
          <input
            type="text"
            id="name"
            placeholder="Website name"
            className="sm:text-xl bg-gray-950 flex-1 px-4 py-2 text-lg text-gray-200 rounded-r"
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
        </div>
        {errors.name && (
          <p className="sm:text-xl text-lg text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2.5">
        <textarea
          id="description"
          rows="5"
          placeholder="Write a description"
          className="sm:text-xl bg-gray-950 px-4 py-2 text-lg text-gray-200 rounded resize-none"
          {...register("description", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
        ></textarea>
        {errors.description && (
          <p className="sm:text-xl text-lg text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`px-4 py-2.5 transition-colors ease-in  text-gray-50 text-lg sm:text-xl rounded w-full sm:w-[80%] mx-auto ${
          id ? "bg-green-700 hover:bg-green-600" : "bg-red-700 hover:bg-red-600"
        }`}
      >
        {id ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default CreateForm;
