import Image from "next/image";

const Clear: React.FC = () => {
  return (
    <div>
      <Image
        src={"/images/new/sun-new.png"}
        alt="sun icon"
        width={100}
        height={100}
        style={{ display: "block", fontSize: 0 }}
      />
    </div>
  );
};

export default Clear;
