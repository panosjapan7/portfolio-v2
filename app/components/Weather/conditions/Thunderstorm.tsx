import Image from "next/image";
import { AiFillThunderbolt, AiFillCloud } from "react-icons/ai";
import "./conditions.css";

const Thunderstorm: React.FC = () => {
  return (
    <div>
      <Image
        src={"/images/new/thunderstorm-new.png"}
        width={120}
        height={120}
        alt="thunderstorm icon"
      />
    </div>
  );
};

export default Thunderstorm;
