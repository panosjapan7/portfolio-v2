import Image from "next/image";

const Rain: React.FC = () => {
  return (
    <div>
      <Image
        src={"/images/new/rain-new.png"}
        width={120}
        height={120}
        alt="rain icon"
      />
    </div>
  );
};

export default Rain;
