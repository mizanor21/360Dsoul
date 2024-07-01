const Events = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-4 min-h-screen">
      {/* Left Part - Filters */}
      <div className="md:w-1/3 lg:w-1/4 bg-white p-4 shadow-md rounded-lg mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Filter Events</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>All Types</option>
            <option>Conference</option>
            <option>Workshop</option>
            <option>Meetup</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>All Languages</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md">
          Apply Filters
        </button>
      </div>

      {/* Right Part - Events */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="flex flex-col space-y-8 lg:col-span-3">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                14 Jul 2020
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    Mascarpone cheese triangles taleggio
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                Brie cheese triangles cheesecake. Cauliflower cheese cheese and
                wine manchego bocconcini croque monsieur queso airedale brie.
              </p>
              <div className="flex items-center"></div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                14 Jul 2020
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    Mascarpone cheese triangles taleggio
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                Brie cheese triangles cheesecake. Cauliflower cheese cheese and
                wine manchego bocconcini croque monsieur queso airedale brie.
              </p>
              <div className="flex items-center"></div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                14 Jul 2020
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <a
                    href="/"
                    className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl"
                  >
                    Mascarpone cheese triangles taleggio
                  </a>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                Brie cheese triangles cheesecake. Cauliflower cheese cheese and
                wine manchego bocconcini croque monsieur queso airedale brie.
              </p>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>

        {/* pagination  */}

        <div className="flex justify-end space-x-3 dark:text-gray-800">
          <button
            title="previous"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            title="Page 1"
            className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600"
          >
            1
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"
            title="Page 2"
          >
            2
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"
            title="Page 3"
          >
            3
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"
            title="Page 4"
          >
            4
          </button>
          <button
            title="next"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
