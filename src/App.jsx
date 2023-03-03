import { createRoot } from "react-dom/client";
import "./assets/css/style.css";

const App = () => {
  return (
    <div className="grid h-screen place-items-center bg-sky-600 text-2xl">
      <h1 className="hello font-sans">Meta Foundation</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
