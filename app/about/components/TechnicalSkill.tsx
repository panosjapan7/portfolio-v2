import Image from "next/image";

interface TechSkill {
  source: string;
  alt: string;
  width: number;
  height: number;
  skill: string;
  isDay: boolean;
}

const TechnicalSkill: React.FC<TechSkill> = ({
  source,
  alt,
  width,
  height,
  skill,
  isDay,
}) => {
  return (
    <div className="flex gap-1 ml-2 mb-2">
      <Image src={source} alt={alt} width={width} height={height} />
      <p
        className={`text-sm font-light ${
          isDay ? "text-slate-800" : "text-slate-50"
        }`}
      >
        {skill}
      </p>
    </div>
  );
};

export default TechnicalSkill;
