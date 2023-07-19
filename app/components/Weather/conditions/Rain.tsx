import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import "./conditions.css";

const Rain: React.FC = () => {
  return (
    <div className="rain-container">
      <BsFillCloudRainHeavyFill className="rain" />
    </div>
  );
};

export default Rain;
