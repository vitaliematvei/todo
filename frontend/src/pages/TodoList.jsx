import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { PiCirclesFourFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5555/todos").then((response) => {
      setTodos(response.data.data);
      setLoading(false).catch((error) => {
        console.log(error);
        setLoading(false);
      });
    });
  }, []);

  return (
    <div className="bg-white text-center 2xl:w-[50%] rounded-l-md h-full">
      <button className="py-4 px-52 md:px-64 xl:px-80 mt-10 2xl:mt-14 rounded-full text-3xl text-white bg-slate-700">
        <Link to={`/todos/main_dash/`}>Editing...</Link>
      </button>
      <div className="w-fit mx-auto">
        <h1 className="text-slate-700 text-4xl 2xl:text-5xl font-bold mt-8">
          Booking Movie Tickets
        </h1>
        <div className="flex justify-center text-2xl 2xl:justify-end gap-x-4 mt-4 text-slate-500">
          <Link to={`/todos/edit/`}>Edit</Link>
          <Link to={`/todos/delete/`}>Remove</Link>
        </div>
        <p className="text-left text-2xl  mt-6 2xl:mt-12 text-slate-500">
          Tasks
        </p>
        {loading ? (
          <Spinner />
        ) : (
          <div className="mt-4 text-2xl">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex gap-5 bg-slate-100 mb-8 py-1 rounded-md"
              >
                <PiCirclesFourFill
                  style={{ color: "#D0D5DD" }}
                  className="text-5xl"
                />
                <FaCircle style={{ color: "#D0D5DD" }} className="text-5xl" />
                <div>{todo.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
