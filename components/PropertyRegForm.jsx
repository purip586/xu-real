import Link from "next/link";

const PropertyRegForm = ({ post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Register New Property</span>
      </h1>
   
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Property Name
          </span>

          <input
            value={post.propertyName}
            onChange={(e) => setPost({ ...post, propertyName: e.target.value })}
            placeholder='Property Name'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Price
          </span>
          <input
            value={post.price}
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            type='number'
            placeholder='price'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Location
          </span>
          <input
            value={post.location}
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            type='text'
            placeholder='Location'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Photos
          </span>
          <input
            value={post.coverPhoto}
            onChange={(e) => setPost({ ...post, coverPhoto: e.target.value })}
            type='file'
            placeholder='upload Images'
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? submitting:'Save'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PropertyRegForm;
