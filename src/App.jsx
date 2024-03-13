import Cart from "./assets/components/Courses/Cart";
import Course from "./assets/components/Courses/Course";

function App() {
  return (
    <div className=" text-center">
      <h1 className="text-4xl font-bold   mt-15">Course Registration</h1>
      <div className="grid grid-cols-12 my-10">
        <div className="col-span-10">
          <Course></Course>
        </div>
        <div className="col-span-2">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
