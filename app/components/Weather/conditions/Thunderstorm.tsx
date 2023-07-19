import { AiFillThunderbolt, AiFillCloud } from "react-icons/ai";
import "./conditions.css";

const Thunderstorm: React.FC = () => {
  return (
    <div className="thunderstorm-container">
      <AiFillCloud className="thunderstorm-cloud" />
      <AiFillThunderbolt className="thunderstorm-thunder" />
    </div>
  );
};

export default Thunderstorm;
