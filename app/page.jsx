import Herotitle from '@/components/Herotitle';
import PropertyList from '@/components/PropertyList';
import SearchFilters from "@/components/SearchFilters";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <Herotitle />
    <SearchFilters />
    <PropertyList />
  </section>
);

export default Home;
