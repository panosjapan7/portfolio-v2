import Image from "next/image";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import "./conditions.css";

const Rain: React.FC = () => {
  return (
    <div>
      <Image
        src={"/images/new/rain-new.png"}
        width={120}
        height={120}
        alt="clouds"
      />
    </div>
  );
};

export default Rain;
