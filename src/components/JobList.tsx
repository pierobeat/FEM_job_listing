import data from "../dummy-data/data.json";
import { JobListing } from "../utils/type";
import { useFilterTagStore } from '../store/FilterTag';

function JobList() {
  const { addTag, tags, removeTag } = useFilterTagStore();
  const filteredJobs:JobListing[] = tags.length === 0 
  ? data 
  : data.filter(job => {
      const tagList = [job.role, job.level, ...job.tools, ...job.languages];
      return tags.every(tag => tagList.includes(tag));
    });

  return (
    <div className="w-full h-full px-[70px] pt-[38px] relative space-y-6 overflow-y-auto">
      {filteredJobs?.map((job) => {
        const tagList: string[] = [job.role, job.level, ...job.tools, ...job.languages];        

        return (
          <div
            key={job.id}
            className={`w-full flex flex-col mobile:flex-row mobile:justify-between mobile:items-center bg-white p-6 mobile:p-8 rounded-xl shadow-lg gap-4 mobile:gap-0 ${
              job.featured ? "border-l-4 mobile:border-l-8 border-[#5DA5A4]" : ""
            }`}
          >
            {/* Top section: Logo + Info */}
            <div className="flex flex-col mobile:flex-row mobile:items-center gap-4 mobile:gap-6">
              {/* Logo */}
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-14 h-14 mobile:w-20 mobile:h-20 object-contain -mt-10 mobile:mt-0"
              />

              {/* Text Info */}
              <div className="space-y-2">
                {/* Company + badges */}
                <div className="flex items-center gap-3 flex-wrap">
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
                <p className="font-bold text-lg mobile:text-xl text-[#5DA5A4]">
                  {job.position}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-2 text-gray-400 text-sm font-medium">
                  <span>{job.postedAt}</span>
                  <span>•</span>
                  <span>{job.contract}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Tags section (wraps below on mobile) */}
            <div className="flex flex-wrap gap-3 pt-2 border-t mobile:border-0 mobile:pt-0 mobile:pl-6 mt-4 mobile:mt-0 pt-4 mobile:pt-0">
              {tagList.map((tag, index) => (
                <span
                  key={index}
                  onClick={() =>
                    tags.includes(tag) ? removeTag(tag) : addTag(tag)
                  }
                  className={`font-bold text-sm px-3 py-2 rounded-md cursor-pointer transition leading-none 
                    ${
                      tags.includes(tag)
                        ? "bg-[#5DA5A4] text-white"
                        : "bg-[#F0F7F5] text-[#5DA5A4] hover:bg-[#5DA5A4] hover:text-white"
                    }`}
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
