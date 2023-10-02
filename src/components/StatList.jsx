const StatList = ({ statlistCart }) => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center shadow-md py-5">
                <span className="mb-6 inline-block p-4 rounded bg-green-100">
                  <svg
                    className="w-6 h-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold">250 324</h3>
                <p className="text-gray-500">Followers</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatList;
