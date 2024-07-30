import { useState } from "react";
import Spinner from "../components/Spinner.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateTodo = () => {
  const [content, setContent] = useState("");
  const [details, setDetails] = useState("");
  const [done, setDone] = useState(false);
  const [createdAt, setCreatedAt] = useState(new Date());
  const [reminderTime, setReminderTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveTodo = async () => {
    const data = { content, details, done };
    // const data = { content, done, createdAt, details, reminderTime };
    setLoading(true);
    await axios
      .post("http://localhost:5555/todos", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error Happend. Please Chack console");
        console.log(error);
      });
  };

  return (
    <div className="bg-white text-center 2xl:w-[50%] rounded-l-md h-full mx-auto">
      <h1 className="py-4 px-52 md:px-64 xl:px-80 mt-10 2xl:mt-14 rounded-full text-3xl text-white bg-slate-700">
        Create ToDo
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Content</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Details</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Done</label>
          <input
            type="checkbox"
            checked={done}
            onChange={() => setDone(!done)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Created At</label>
          <input
            type="date"
            value={createdAt}
            onChange={() => setCreatedAt(createdAt)}
            // value={createdAt.toISOString().slice(11, 16)}
            // onChange={(e) => setCreatedAt(new Date(`${e.target.value}:00`))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* 
       

        

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Reminder Time</label>
          <input
            type="time"
            value={createdAt.toISOString().slice(11, 16)}
            onChange={(e) => setReminderTime(new Date(`${e.target.value}:00`))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div> */}
      </div>
      <button className="p-2 bg-sky-300" onClick={handleSaveTodo}>
        Save
      </button>
    </div>
  );
};

export default CreateTodo;
