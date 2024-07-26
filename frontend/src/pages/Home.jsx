import TodoList from "./TodoList";
import Logo from "../assets/img/MainIMG.png";

const Home = () => {
  return (
    <div className="max-w-[1920px] h-[960px] mx-auto pt-16 bg-hero-patern">
      <div className="2xl:flex justify-between">
        <div className="mx-auto justify-center">
          <img
            src={Logo}
            alt="logo"
            className="2xl:w-[580px] 2xl:mt-24 mb-10 2xl:mb-60 mx-auto"
          />
          <h1 className="text-center 2xl:text-start text-yellow-300 font-bold text-5xl 2xl:text-6xl 2xl:w-[620px] mb-14">
            Free for personal and commercial use
          </h1>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
