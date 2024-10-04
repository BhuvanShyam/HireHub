import Job from "./Job";
import Navbar from "./shared/Navbar";

const Randomjobs = [1, 2, 3];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <h1 className="font-bold text-xl my-10">Search Results {Randomjobs.length}</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {Randomjobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
