import Feed from "@/components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <p className='logo_text text-center'>Cross U`s International Realty, Global Business Department</p>
    <h1 className='head_text text-center'>
      Discover
      <span className='blue_gradient text-center'> Japan`s Real Property For Sale</span>
    </h1>
 
    <Feed />
  </section>
);

export default Home;
