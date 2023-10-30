import TodoPage from "./pages/todoPage";
import "./assets/css/index.css";
import { Toaster } from "react-hot-toast";
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
      <Toaster />
    </div>
  );
}

export default App;
