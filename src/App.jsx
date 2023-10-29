import TodoPage from "./pages/todoPage";
import "./assets/css/index.css";
function App() {
  return (
    <div>
      <div className="">
        <TodoPage />
        <div className="text-center text-white p-2 w-full">
          <div className="text-sm">
            © 2023 Todo-App by Viki Ade Safaat. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
