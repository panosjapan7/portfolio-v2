import { AiFillCloud } from "react-icons/ai";
import "./conditions.css";

const Clouds: React.FC = () => {
  return (
    <div className="clouds-container">
      <AiFillCloud className="clouds-one" />
      <AiFillCloud className="clouds-two" />
    </div>
  );
};

export default Clouds;
