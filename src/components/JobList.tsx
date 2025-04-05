import { useState } from "react";
import data from "../dummy-data/data.json";
import { JobListing } from "../utils/type";

function JobList() {
  const [jobList, setJobList] = useState<JobListing[]>(data);

  return (
    <div className="w-full h-full px-[70px] pt-[30px] relative space-y-6">
      {jobList?.map((job) => {
        const tagList: string[] = [job.role, job.level, ...job.tools, ...job.languages];

        return (
          <div
            key={job.id}
            className={`w-full flex justify-between items-center bg-white p-6 md:p-8 rounded-xl shadow-lg ${
              job.featured ? "border-l-8 rounded-none border-[#5DA5A4]" : ""
            }`}
          >
            <div className="flex items-center gap-6">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <p className="text-[#5DA5A4] font-bold">{job.company}</p>
                  {job.new && (
                    <span className="text-white text-xs font-bold bg-[#5DA5A4] rounded-full px-2 py-1 uppercase">
                      New!
                    </span>
                  )}
                  {job.featured && (
                    <span className="text-white text-xs font-bold bg-black rounded-full px-2 py-1 uppercase">
                      Featured
                    </span>
                  )}
                </div>

                {/* Job position */}
                <p className="font-bold text-xl text-[#5DA5A4]">
                  {job.position}
                </p>

                {/* Details */}
                <div className="flex gap-2 text-gray-400 text-sm font-medium">
                  <span>{job.postedAt}</span>
                  <span>•</span>
                  <span>{job.contract}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Right Section (tags) */}
            <div className="flex flex-wrap gap-3 md:pl-6 pt-4 md:pt-0">
              {tagList.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#F0F7F5] text-[#5DA5A4] font-bold text-sm px-3 py-2 rounded-md cursor-pointer hover:bg-[#5DA5A4] hover:text-white transition leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobList;
