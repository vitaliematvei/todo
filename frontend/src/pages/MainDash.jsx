import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import Calendar from "../components/Calendar";

const MainDash = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

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
    <div className="bg-white text-center 2xl:w-[50%] rounded-l-md h-full mx-auto pt-10">
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
                className={`hover:pl-2 hover:bg-slate-100 mb-6 py-1 rounded-xl ${
                  selectedTodoIndex !== index ? null : "bg-slate-100 pl-2"
                } `}
              >
                <div className="flex gap-4">
                  <FaCircle
                    onClick={() => {
                      if (selectedTodoIndex === index) {
                        setSelectedTodoIndex(null);
                      } else {
                        setSelectedTodoIndex(index);
                      }
                    }}
                    style={{ color: "#D0D5DD" }}
                    className="text-5xl"
                  />
                  <div>{todo.content}</div>
                </div>

                <div
                  className={`text-left pl-16 text-xl text-slate-500 ${
                    selectedTodoIndex !== index ? "hidden" : "block"
                  }`}
                >
                  <p>
                    <span className="text-black text-2xl  font-bold mr-4">
                      Details :
                    </span>
                    {todo.details}
                  </p>
                  <p>
                    <span className="text-black text-2xl  font-bold mr-4">
                      Done :
                    </span>
                    {todo.done ? "Yes" : "No"}
                  </p>
                  <p>
                    <span className="text-black text-2xl  font-bold mr-4">
                      Created at :
                    </span>
                    {new Date(todo.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="text-black text-2xl  font-bold mr-4">
                      Reminded for :
                    </span>
                    {new Date(todo.reminderTime).toLocaleDateString()}
                  </p>
                  <div className="py-5 flex justify-between items-center">
                    <button
                      onClick={handleCalendarClick}
                      className="bg-slate-700 text-white px-4 py-3 mr-8 rounded-full hover:scale-110"
                    >
                      Add remainder
                    </button>
                    {isCalendarOpen && <Calendar />}
                    <LuMessageCircle
                      className="mr-8"
                      style={{ color: "#667085", fontSize: "1.75rem" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDash;
