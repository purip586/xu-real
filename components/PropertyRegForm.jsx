import Link from "next/link";

const PropertyRegForm = ({ post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Register New Property</span>
      </h1>
   
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism font-sans'
      >
        <label>
          <span className='font-semibold text-base text-gray-700'>
            Photos
          </span>
          <input
            value={post.photos}
            onChange={(e) => setPost({ ...post, photos: e.target.value })}
            type='file'
            placeholder='upload Images'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Cover Photo
          </span>
          <input
            value={post.coverPhoto}
            onChange={(e) => setPost({ ...post, coverPhoto: e.target.value })}
            type='file'
            placeholder='upload Images'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
           Property Category
          </span>
          <input
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            type='select'
            placeholder='Category'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Build Status
          </span>
          <input
            type="select"
            value={post.buildStatus}
            onChange={(e) => setPost({ ...post, buildStatus: e.target.value })}
            placeholder='Build Status'
            required
            className='form_input'
          />
        </label>

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
            Commute 1
          </span>
          <input
            value={post.commute1}
            onChange={(e) => setPost({ ...post, commute1: e.target.value })}
            type='text'
            placeholder='Commute 1'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Commute 2
          </span>
          <input
            value={post.commute2}
            onChange={(e) => setPost({ ...post, commute2: e.target.value })}
            type='text'
            placeholder='Commute 2'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            No. of bedrooms
          </span>
          <input
            value={post.rooms}
            onChange={(e) => setPost({ ...post, rooms: e.target.value })}
            type='text'
            placeholder='Rooms'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            No. of bathroom/toilet
          </span>
          <input
            value={post.baths}
            onChange={(e) => setPost({ ...post, baths: e.target.value })}
            type='text'
            placeholder='Baths'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Parking
          </span>
          <input
            value={post.parking}
            onChange={(e) => setPost({ ...post, parking: e.target.value })}
            type='select'
            placeholder='Parking'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Size
          </span>
          <input
            value={post.size}
            onChange={(e) => setPost({ ...post, size: e.target.value })}
            placeholder='Size of building'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-semibold text-base text-gray-700'>
            Land Area
          </span>
          <input
            value={post.landArea}
            onChange={(e) => setPost({ ...post, landArea: e.target.value })}
            placeholder='Land Area'
            required
            className='form_input'
          />
        </label>

        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Built Year
          </span>
          <input
            value={post.builtYear}
            onChange={(e) => setPost({ ...post, builtYear: e.target.value })}
            placeholder='Built Year'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Built of
          </span>
          <input
            value={post.builtOf}
            onChange={(e) => setPost({ ...post, builtOf: e.target.value })}
            placeholder='Built of'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Amenities
          </span>
          <textarea
            value={post.amenities}
            onChange={(e) => setPost({ ...post, amenities: e.target.value })}
            placeholder='Amenities'
            required
            className='form_textarea'
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
