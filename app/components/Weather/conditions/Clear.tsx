import Image from "next/image";
import "./conditions.css";

const Clear: React.FC = () => {
  return (
    <div>
      <Image
        src={"/images/sun.svg"}
        alt="sun icon"
        width={350}
        height={350}
        style={{ display: "block", fontSize: 0 }}
      />
      {/* <div className="sun-container"></div>; */}
    </div>
  );
};

export default Clear;
