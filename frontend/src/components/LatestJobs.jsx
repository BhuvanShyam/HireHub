import LatestJobCard from "./LatestJobCard";

const LatestJobs = () => {
  const randomJob = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-7xl my-20 mx-auto">
      <h1 className="text-4xl font-bold ">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5 ">
        {randomJob.slice(0,6).map((item, index) => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
