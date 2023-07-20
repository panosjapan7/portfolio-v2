import Image from "next/image";

const Clouds: React.FC = () => {
  return (
    <div>
      <Image
        src={"/images/new/clouds-new.png"}
        width={120}
        height={120}
        alt="clouds icon"
      />
    </div>
  );
};

export default Clouds;
