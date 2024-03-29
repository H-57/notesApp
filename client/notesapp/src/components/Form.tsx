"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Form({
  id,
  setIsChange,
  IsChange,
}: {
  id?: string;
  setIsChange: any;
  IsChange: boolean;
}) {
  const [Form, setForm] = useState({ title: "", content: "" });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/notes/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({ ...Form, title: data?.data?.title, content: data?.data?.content })
      );
  }, [id]);

  const handelFormData = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    setIsChange(!IsChange);
    if (!Form.title || !Form.content) {
      toast.error("Please fill all the fields");
      return;
    }
    if (id) {
      const response = await (
        await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/notes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Form),
        })
      ).json();
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } else {
      const response = await (
        await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Form),
        })
      ).json();
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <form className="max-w-sm mx-auto border rounded-md p-5 flex flex-col  justify-center gap-2">
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Notes Title
        </label>
        <input
          onChange={handelFormData}
          name="title"
          type="text"
          value={Form.title}
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="title here"
          required
        />
      </div>

      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        value={Form.content}
        onChange={handelFormData}
        id="message"
        name="content"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="your description here..."
      />
      <button
        onClick={submitForm}
        type="button"
        className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {id ? "Update Notes" : "Add Notes"}
      </button>
    </form>
  );
}

export default Form;
