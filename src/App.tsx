import FilterList from './components/FilterList';
import Header from './components/Header';
import JobList from './components/JobList';
import { useFilterTagStore } from './store/FilterTag';

function App() {
  const { tags } = useFilterTagStore();

  return (
    <div className="w-full max-w-[1440px] h-full mx-auto relative">
      <div className=" sticky top-0 z-10">
        <Header />
        {
          tags.length > 0 && <FilterList />
        }
      </div>
      <JobList />
    </div>
  )
}

export default App
