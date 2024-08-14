export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4">
        News plays a vital role in our society, serving as a bridge that
        connects individuals to the broader world around them. It informs,
        educates, and empowers citizens, allowing them to make informed
        decisions about their lives, communities, and governments. By providing
        timely and accurate information, news helps maintain a well-informed
        public, which is essential for a functioning democracy.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="border rounded-lg p-2 w-full"
            ></textarea>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="h-5 w-5"
            />
            <label htmlFor="newsletter" className="text-sm font-medium">
              I would like to receive notifications about updates and special
              offers.
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Phone:</strong> (121) 322-1230
        </p>
        <p className="mb-2">
          <strong>Email:</strong> reportersaroundtheworld@gmail.com
        </p>
      </div>
    </div>
  );
}
