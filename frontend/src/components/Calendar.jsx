import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [todos, setTodos] = useState([]);
  const [selectDate, setSelectedDate] = useState(new Date());
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(`http://localhost:5555/todos/${id}`);
        setTodos(response.data.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching todos:", error); // Log the error for debugging
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);
  // useEffect(async () => {
  //   setLoading(true);
  //   axios
  //     .get("http://localhost:5555/todos/${id}")
  //     .then((response) => {
  //       setTodos(response.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert("An error happened. Please Check console");
  //       console.log(error);
  //     });
  // }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSaveTime = async () => {
    setIsLoading(true);
    const info = {
      ...todos,
      reminderTime: selectDate,
    };
    await axios
      .put(`http://localhost:5555/todos/${id}`, info)
      .then(() => {
        setIsLoading(false);
        <Link to={`/`}>Edit</Link>;
      })
      .catch((error) => {
        setIsLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between align-middle mr-8 bg-slate-200 rounded-2xl">
      <DatePicker
        className="mx-8 p-2 rounded-lg border-4"
        selected={selectDate}
        onChange={(date) => handleDateChange(date)}
        showTimeSelect
        dateFormat="Pp"
      />
      <button
        onClick={handleSaveTime}
        disabled={loading}
        className="bg-slate-700 text-white px-4 py-3 rounded-2xl hover:scale-110"
      >
        Save
      </button>
    </div>
  );
};

export default Calendar;
