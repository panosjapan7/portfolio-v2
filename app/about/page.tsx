import Image from "next/image";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="pl-11 pr-11 flex justify-center gap-10">
      <div className="left-column">
        <div>
          <h2 className="text-xl font-semibold mb-5">About Me</h2>
          <div style={{ position: "relative" }}>
            <div
              className="flex items-center gap-2 mb-5 relative"
              style={{ zIndex: 2 }}
            >
              <Image
                className="rounded border border-white"
                src="/images/panos-2-square.jpg"
                width={23}
                height={23}
                alt="Panos"
              />
              <p className="text-xs font-medium">About Me</p>
            </div>
            <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="rounded border border-white star-container">
              <Image
                src="/images/tech-star.svg"
                width={20}
                height={20}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium">Technical Skills</p>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="exp-container">
              <Image
                src="/images/exp-star.png"
                width={12}
                height={12}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium">Experience</p>
          </div>
        </div>
        <div className="mt-11">
          <h2 className="text-xl font-semibold mb-5">Projects</h2>
          <div className="flex items-center gap-2 mb-5">
            <div className="exp-container">
              <Image
                src="/images/p-icon.svg"
                width={22}
                height={22}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium">Portfolio</p>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="rounded border border-white star-container">
              <Image
                src="/images/mern-icon.svg"
                width={20}
                height={20}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium">MERN + Firebase Auth</p>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="exp-container">
              <Image
                src="/images/twitter-icon.png"
                width={12}
                height={12}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium">Twitter Feed</p>
          </div>
        </div>
      </div>
      <div className="border border-black row-span-3 col-span-4">
        <p>Right Colummn</p>
      </div>
    </div>
  );
};

export default AboutPage;
