import "./home.css";
export default function Home() {
  return (
    <main>
      <div className="content-wrapper flex justify-center text-center">
        <div className="flex flex-col items-center xl:-mt-16 lg:-mt-14">
          <div className="sun-container"></div>
          <div>
            <p className="mt-20 ">
              <span className="text-4xl mr-0.5">20</span>
              <span className="text-2xl font-extralight mr-3">C</span>
              <span className="text-2xl font-light">Sunny</span>
            </p>
            <p className="font-thin mt-2 ">Stockholm, Sweden</p>
          </div>
          <div className="mt-8">
            <p>
              <span className="font-thin mr-2.5">Monday, June 27 2023</span>
              <span className="mr-2.5">|</span>
              <span className="tracking-widest">17:11</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
