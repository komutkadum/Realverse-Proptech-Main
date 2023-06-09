function ShowPropertList({ title }) {
  return (
    <>
      <section className="max-w-6xl mx-auto  pt-8">
        <h3 className="text-center text-xl font-semibold mb-8 px-4">{title}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-4  justify-between text-neutral-600 mb-8 px-4">
          <div>
            <button className="border border-neutral-500 p-1.5 flex items-center justify-start gap-x-1 rounded-md px-3">
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-adjustments-horizontal"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 6l8 0" />
                <path d="M16 6l4 0" />
                <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 12l2 0" />
                <path d="M10 12l10 0" />
                <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 18l11 0" />
                <path d="M19 18l1 0" />
              </svg>
            </button>
          </div>
          <div className="flex gap-x-2 items-center">
            <span>Sort by: </span>
            <button className="flex justify-center divide-x gap-x-2 border border-neutral-500 rounded-md p-1.5">
              <span>Price - Low to High</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-caret-down"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 10l6 6l6 -6h-12" />
              </svg>
            </button>
          </div>
        </div>
        {/* start of property list */}
        <div className="explore-luxury">
          <div className="explore-luxury-card">
            <div className="explore-luxury-card-top">
              <div className="explore-luxury-card-top-left">
                <h3 className="text-lg">Prestige Park Grove</h3>
                <div className="text-xs font-light flex items-center gap-x-1">
                  <img src="/icon/location.png" className="w-3" />
                  <p>Whitefield, Bangalore</p>
                </div>
                <div className="grid gap-y-px">
                  <div className="text-xs font-normal flex items-center gap-x-1.5">
                    <img src="/icon/bed.png" className="w-5" />
                    <p>1, 2, 3, 4, 5 BHK</p>
                  </div>
                  <div className="text-xs font-normal flex items-center gap-x-1.5">
                    <img src="/icon/ruler.png" className="w-5" />
                    <p>625 - 3500 Sqft</p>
                  </div>
                </div>
                <h2>&#8377; 56,25,000</h2>
              </div>
              <div className="explore-luxury-card-top-right relative">
                <img
                  src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                  className=""
                  alt="banner image"
                />
                <span className="absolute top-2 left-2 px-3 py-1 bg-[#646164] font-medium rounded-full text-white text-[11px]">
                  Pre Launch
                </span>
                <span className="absolute top-2 right-2 shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <button className="explore-luxury-card-bottom">Details</button>
            </div>
          </div>
        </div>
        <div className="text-sm w-full">
          <button className="flex hover:bg-primary hover:text-white items-center justify-between border border-primary px-4 py-1 rounded-xl text-primary font-bold mx-auto">
            Show More
          </button>
        </div>
        <div className="h-10 mt-20 w-full bg-gradient-to-t from-primary/20 to-transparent rounded-b-lg"></div>
      </section>
    </>
  );
}

export default ShowPropertList;
