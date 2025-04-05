import { useFilterTagStore } from '../store/FilterTag';

function FilterList() {
  const { tags, removeTag, clearTags } = useFilterTagStore();

  return (
    <div className="w-[90%] bg-white shadow-lg rounded-md p-6 flex items-center justify-between gap-4 mx-auto -mt-10 relative z-20">
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <div key={tag} className="flex items-center bg-[#eff6f6] rounded">
              <span className="px-2 text-[#5DA5A4] font-bold text-sm">{tag}</span>
              <span 
                className="bg-[#5DA5A4] text-white px-2 cursor-pointer font-semibold"
                onClick={() => removeTag(tag)}
              >✕</span>
          </div>
        ))}
      </div>
      <span 
        className="text-[#5DA5A4] hover:underline text-sm cursor-pointer font-semibold"
        onClick={clearTags}
      >
        Clear
      </span>
    </div>
  )
}

export default FilterList;