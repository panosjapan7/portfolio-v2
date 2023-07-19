import "./conditions.css";
import { RiDrizzleFill } from "react-icons/ri";
import { CiCloudDrizzle } from "react-icons/ci";

const Drizzle: React.FC = () => {
  return (
    <div className="drizzle-container">
      {/* <RiDrizzleFill className="drizzle" /> */}
      <CiCloudDrizzle className="drizzle" />
    </div>
  );
};

export default Drizzle;
