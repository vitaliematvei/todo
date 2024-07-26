import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateTodo from "./pages/CreateTodo.jsx";
import EditTodo from "./pages/EditTodo.jsx";
import DeleteTodo from "./pages/DeleteTodo.jsx";
import ShowTodo from "./pages/ShowTodo.jsx";
import MainDash from "./pages/MainDash.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos/main_dash" element={<MainDash />} />
      <Route path="/todos/create" element={<CreateTodo />} />
      <Route path="/todos/edit/:id" element={<EditTodo />} />
      <Route path="/todos/delete/:id" element={<DeleteTodo />} />
      <Route path="/todos/details/:id" element={<ShowTodo />} />
    </Routes>
  );
};

export default App;
