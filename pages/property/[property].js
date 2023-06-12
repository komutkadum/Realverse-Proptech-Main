function Home() {
  return (
    <>
      {/* <!-- breadcrumbs --> */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <span className="text-primary">
          Home {`>`} Properties {`>`} Bangalore {`>`} Prestige Park Grove
        </span>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-1.5">
        <span className="py-1.5 px-4 rounded-lg bg-neutral-500 text-xs text-white">
          Under Construction
        </span>
      </div>
      <section className="max-w-6xl mx-auto pt-3">
        {/* <!-- grid --> */}
        <div className="flex w-full gap-6">
          {/* <!-- left grid --> */}
          <div className="flex-1 overflow-x-auto pb-12">
            {/* <!-- photos --> */}
            <div className="grid w-full gap-2 grid-rows-4 mb-4 grid-flow-col px-4">
              <div className="row-span-4 col-span-2 rounded-md md:rounded-lg bg-cover bg-no-repeat bg-white bg-center aspect-w-16 aspect-h-9 bg-[url('/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp')]"></div>
              <div className="row-span-2 col-span-1 rounded-lg bg-cover bg-no-repeat bg-white bg-center aspect-w-16 aspect-h-9 bg-[url('/images/bgimg.jpg')] hidden md:block"></div>
              <div className="row-span-2 col-span-1 rounded-lg bg-cover bg-no-repeat bg-white bg-center aspect-w-16 aspect-h-9 bg-[url('/images/vr-tour.webp')] hidden md:block"></div>
            </div>
            {/* <!-- location --> */}
            <div className="flex justify-between gap-x-4 px-4 mb-2">
              <div>
                <h1 className="text-lg font-semibold">
                  Cardinal Energy Cardinal one
                </h1>
                <div className="flex items-start gap-x-2">
                  <img
                    src="/icon/location.png"
                    className="w-4 mt-1"
                    alt="location icon"
                  />
                  <span className="text-ss sm:text-xs text-neutral-500">
                    Dasarahalli on Tumkur Road, Bangalore
                  </span>
                </div>
              </div>
              <div className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart drop-shadow-lg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="black"
                  fill="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <button className="flex justify-center h-9 rounded-md gap-x-2 px-4 items-center bg-primary-300">
                  Gallery
                  <img
                    src="/icon/gallery.png"
                    className="w-5"
                    alt="gallery icon"
                  />
                </button>
              </div>
            </div>
            {/* <!-- price and rating --> */}
            <div className="flex items-center justify-between  px-4 mb-8">
              <div className="flex gap-x-1 text-xl font-semibold items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-currency-rupee"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="black"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                  <path d="M7 9l11 0" />
                </svg>
                <p>1,52,00,000</p>
              </div>
              <div className="flex gap-x-1 text-xs items-center">
                <img src="/icon/star.png" className="w-4" alt="star icon" />
                <img src="/icon/star.png" className="w-4" alt="star icon" />
                <img src="/icon/star.png" className="w-4" alt="star icon" />
                <img src="/icon/star.png" className="w-4" alt="star icon" />
                <img src="/icon/rating.png" className="w-4" alt="star icon" />
                <p>4.3 (63)</p>
              </div>
            </div>
            {/* <!-- Overview at a glance --> */}
            <div className="mx-4 xs:mx-8 lg:hidden mb-8">
              <h1 className="text-lg-20 md:text-xl font-medium mb-8 text-center lg:text-left">
                Overview at Glance
              </h1>
              <div className="grid grid-cols-2 gap-3 leading-5 text-xs [&>div]:h-20">
                <div className="flex items-start gap-x-1  bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                  <img src="/icon/land.png" className="w-5" alt="land icon" />
                  <div>
                    <p>Land Area</p>
                    <b>1 Acres</b>
                  </div>
                </div>
                <div className="flex items-start gap-x-1 bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                  <img
                    src="/icon/calendar.png"
                    className="w-5"
                    alt="calendar icon"
                  />
                  <div>
                    <p>Possession Date</p>
                    <b>
                      September 11,
                      <br />
                      2024
                    </b>
                  </div>
                </div>
                <div className="flex items-start gap-x-1 bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                  <img
                    src="/icon/building.png"
                    className="w-5"
                    alt="building icon"
                  />
                  <div>
                    <p>Residential Type</p>
                    <b>Apartments</b>
                  </div>
                </div>
                <div className="flex items-start gap-x-1 bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                  <img
                    src="/icon/warehouse.png"
                    className="w-5"
                    alt="warehouse icon"
                  />
                  <div>
                    <p>Total Units</p>
                    <b>On Request</b>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- floor plans --> */}
            <div className=" px-4 xs:px-8 mb-8">
              <h1 className="text-lg-20 md:text-xl font-medium mb-8 text-center lg:text-left">
                Complete View of Floor Plans & Pricing
              </h1>
              <div className="flex flex-co xs:flex-row [&>*]:flex-1 items-center gap-x-4">
                <div className="grid place-items-center">
                  <div className="flex items-center gap-x-2 font-semibold">
                    <img src="/icon/bed.png" className="w-12" alt="bed icon" />
                    <p>View Plan Type</p>
                  </div>
                </div>
                <div className="shadow-lg">
                  <img
                    src="/images/floor_plan__1__a076f332-2720-4353-bbf1-0902b29a1cd5.webp"
                    alt="plan image"
                  />
                </div>
              </div>
            </div>
            {/* <!-- CTA --> */}
            <div className="grid place-items-center px-4 mb-6 md:mb-8">
              <div className="px-2 xs:px-8 pb-8 py-14 rounded-2xl bg-gradient-to-r from-primary to-primary-800 text-white w-full flex items-center gap-x-4 xs:gap-x-8 justify-evenly">
                <div className="relative overflow-hidden">
                  <div className="absolute h-32 w-full bg-secondary top-10 rounded-lg z-0"></div>
                  <img
                    src="/images/limited_offer.webp"
                    className="w-60 animate-bounce z-20"
                    alt="limited offer image"
                  />
                </div>
                <div className="text-left leading-2 xs:text-center  grid gap-y-2">
                  <p className="text-xs xs:text-lg leading-5">
                    There is always an Extra Room for the Discounts and offer
                  </p>
                  <div className="xs:mx-auto ">
                    <button className="bg-primary-500 text-white rounded-lg px-4 py-1 ">
                      Know More
                    </button>
                  </div>
                  <p className="text-[12px] xs:text-xs text-zinc-200">
                    There is no harm in giving a try
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- details in depth --> */}
            <div className=" bg-gradient-to-r from-transparent to-primary-200 pb-4 pt-8 mb-6 md:mb-8 mx-0 xs:mx-4 rounded-2xl">
              <div className="px-4">
                <h1 className="text-xl font-medium mb-4 text-center lg:text-left">
                  Details in Depth
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 p-2 text-[15px]">
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      Construction Status:
                    </span>
                    <span>Pre Launch</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      Elevation:
                    </span>
                    <span>G +30</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      Location:
                    </span>
                    <span>Whitefield</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      City:
                    </span>
                    <span>Bangalore</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      State:
                    </span>
                    <p>Karnataka</p>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      RERA:
                    </span>
                    <span>NA</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Address and Location On Go --> */}
            <div className=" pt-8 mx-0 xs:mx-4 mb-4 ">
              <div className="px-4">
                <div className="text-xl font-medium mb-4 text-center lg:text-left">
                  <span className="relative">
                    <div className="h-20 w-20 gradient-halfcircle absolute -left-5 -top-5  rounded-full"></div>
                    Address and Location
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 p-2 text-[15px]">
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      Area:
                    </span>
                    <span>Whitefield</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      City:
                    </span>
                    <span>Bangalore</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      State:
                    </span>
                    <span>Karnataka</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      Country:
                    </span>
                    <span>India</span>
                  </div>
                  <div className="grid grid-cols-2 items-center justify-between gap-x-2 border-b p-2 border-black/20">
                    <span className="border-r border-black/20 font-semibold">
                      Zip Code:
                    </span>
                    <p>560067</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- map --> */}
            <div className="aspect-w-16 aspect-h-8 overflow-hidden rounded-lg mx-4 mb-14 md:mb-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.782440885512!2d77.71968037478767!3d12.921699987389095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12f34bc721f1%3A0x4c8acd584a361e35!2sAsset%20Aura!5e0!3m2!1sen!2sin!4v1686411595788!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <!-- banner --> */}
            <div className="overflow-hidden rounded-xl px-4 mb-6 md:mb-8">
              <img
                src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                className="mb-2 rounded-2xl"
                alt="banner image"
              />
              <p className="py-4 px-4 font-semibold text-center">
                Be The First To Know About The Upcoming Environment Friendly
                Projects Which Lets You Breathe Smoothly
              </p>
            </div>
            {/* <!-- More details --> */}
            <div className=" mx-0 xs:mx-4 p-4 rounded-xl bg-gradient-to-r from-transparent to-primary-200 mb-6 md:mb-8">
              <div className="text-xl font-medium mb-4 text-center lg:text-left">
                Get More Details Now
              </div>
              <div className="grid w-full grid-cols-8 gap-2 grid-rows-2 mb-6 grid-flow-col">
                <div className="row-span-2 col-span-4 group rounded-lg overflow-hidden bg-contain bg-no-repeat relative bg-white bg-center aspect-w-16 aspect-h-9">
                  <img
                    src="/images/price-sheet.webp"
                    className="group-hover:scale-90 transition-all duration-500"
                    alt="price sheet image"
                  />
                  <div className="absolute grid place-items-center cursor-pointer w-full h-full backdrop-brightness-75 text-white text-xl">
                    Price Sheet
                  </div>
                </div>
                <div className="row-span-1 relative overflow-hidden col-span-4 group rounded-lg bg-cover bg-no-repeat bg-white bg-center backdrop-blur aspect-w-16 aspect-h-6  ">
                  <img
                    src="/images/vr-tour.webp"
                    className="group-hover:scale-100 transition-all duration-500 scale-125"
                    alt="vr tour"
                  />
                  <div className="absolute grid place-items-center cursor-pointer w-full h-full backdrop-blur-sm group-hover:backdrop-blur-[1px] backdrop-brightness-75 text-white text-xl">
                    Virtual Tour
                  </div>
                </div>
                <div className="row-span-1 relative overflow-hidden col-span-4 group rounded-lg bg-cover bg-no-repeat bg-white bg-center backdrop-blur aspect-w-16 aspect-h-6 ">
                  <img
                    src="/images/360-view.webp"
                    className="group-hover:scale-100 transition-all duration-500 scale-125"
                    alt="360view image"
                  />
                  <div className="absolute grid place-items-center cursor-pointer w-full h-full backdrop-blur-sm group-hover:backdrop-blur-[1px] backdrop-brightness-75 text-white text-xl">
                    360° View
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Amenities --> */}
            <div className=" mx-0 xs:mx-4 p-4 mb-8">
              <div className="text-xl font-medium mb-12 text-center lg:text-left relative">
                <span className="relative">
                  <div className="h-20 w-20  absolute -left-5 -top-5 gradient-halfcircle rounded-full"></div>
                  Amenities
                </span>
              </div>
              <div className="grid grid-cols-col-fit-xs text-xs gap-x-4 gap-y-9  text-center leading-5 amenities-grid-bg [&>div]:rounded-lg [&>div]:px-2 [&>div]:pt-2 [&>div]:h-[4.5rem]">
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/shower.webp"
                    className="w-10 absolute -top-5"
                    alt="shower image"
                  />
                  <span>24 Hrs Running Water</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/user-shield.webp"
                    className="w-10 absolute -top-5"
                    alt="user shield image"
                  />
                  <span>24/7 Security</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/basketball.webp"
                    className="w-10 absolute -top-5"
                    alt="basketball image"
                  />
                  <span>Basketball Court</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lge">
                  <img
                    src="/amenities/bicycle.webp"
                    className="w-10 absolute -top-5"
                    alt="bicycle image"
                  />
                  <span>Bike Track</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/cctv-camera.webp"
                    className="w-10 absolute -top-5"
                    alt="cctv camera image"
                  />
                  <span>CCTV Camera</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/park-with-street-light.webp"
                    className="w-10 absolute -top-5"
                    alt="park with street light image"
                  />
                  <span>Community Garden</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/dumbbell.webp"
                    className="w-10 absolute -top-5"
                    alt="dumbbell image"
                  />
                  <span>Gym</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/shuttlecock.webp"
                    className="w-10 absolute -top-5"
                    alt="shuttlecock image"
                  />
                  <span>Indoor Games</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/running.webp"
                    className="w-10 absolute -top-5"
                    alt="running image"
                  />
                  <span>Jogging Track</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lge">
                  <img
                    src="/amenities/bookshop.webp"
                    className="w-10 absolute -top-5"
                    alt="bookshop image"
                  />
                  <span>Library</span>
                </div>
                <div className="grid place-items-center  relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/staff.webp"
                    className="w-10 absolute -top-5"
                    alt="staff image"
                  />
                  <span>Maintenance Staff</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/exercise.webp"
                    className="w-10 absolute -top-5"
                    alt="exercise image"
                  />
                  <span>Outdoor Sports Facilities</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/party.webp"
                    className="w-10 absolute -top-5"
                    alt="party image"
                  />
                  <span>Party Hall</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/electricity.webp"
                    className="w-10 absolute -top-5"
                    alt="electricity image"
                  />
                  <span>Power Backup</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/rainwater-catchment.webp"
                    className="w-10 absolute -top-5"
                    alt="rain water catchment image"
                  />
                  <span>Rain Water Harvesting</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lge">
                  <img
                    src="/amenities/water-pipe.webp"
                    className="w-10 absolute -top-5"
                    alt="water pipe image"
                  />
                  <span>Sewage Treatment</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/garage.webp"
                    className="w-10 absolute -top-5"
                    alt="garage image"
                  />
                  <span>Surface Car Park</span>
                </div>
                <div className="grid place-items-center relative bg-orange-100 rounded-lg">
                  <img
                    src="/amenities/pool.webp"
                    className="w-10 absolute -top-5"
                    alt="pool image"
                  />
                  <span>Swimming Pool</span>
                </div>
              </div>
            </div>
            {/* <!-- emi calculator --> */}
            <div className=" bg-gradient-to-r from-transparent to-primary-200 pb-4 pt-8 mx-0 xs:mx-4 p-4 rounded-2xl mb-6 md:mb-8">
              <h1 className="text-xl font-medium text-center lg:text-left">
                EMI Calculator
              </h1>
              <div className="text-center py-4 text-purple-800 font-semibold">
                <h1 className="text-[32px]">₹1,17,347</h1>
                <p className="font-light">Your monthly amount</p>
              </div>
              <form className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs ">
                <div className="grid">
                  <label>Total Amount</label>
                  <input
                    type="number"
                    placeholder="Total Amount"
                    className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                  />
                </div>
                <div className="grid">
                  <label>Down Payment</label>
                  <input
                    type="number"
                    placeholder="Down Payment"
                    className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                  />
                </div>
                <div className="grid">
                  <label>Interest Rate</label>
                  <input
                    type="number"
                    placeholder="Interest Rate"
                    className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                  />
                </div>
                <div className="grid">
                  <label>Loan Terms(years)</label>
                  <input
                    type="number"
                    placeholder="Loan Terms(years)"
                    className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                  />
                </div>
              </form>
            </div>
            {/* <!-- properties you might like --> */}
            <div className=" mx-0 xs:mx-4 p-4 mb-6 md:mb-8">
              <div className="text-xl font-medium mb-8 text-center lg:text-left relative">
                <span className="relative">
                  <div className="h-20 w-20  absolute -left-5 -top-5 gradient-halfcircle rounded-full"></div>
                  Properties You Might Like
                </span>
              </div>
              <div className="hottest-property pb-4">
                <figure className="hottest-property-card w-64">
                  <div className="hottest-property-card-top">
                    {/* <!-- this div is for the layer above image--> */}
                    <div></div>
                    <img
                      src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                      alt="banner image"
                    />
                    <span className="hottest-property-card-top-pre">
                      Pre Launch
                    </span>
                    <span className="hottest-property-card-top-save">
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
                  <div className="grid gap-y-1 mb-2">
                    <div>
                      <h3>Prestige Park Grove</h3>
                      <div className="text-xs font-light flex items-center gap-x-1">
                        <img
                          src="/icon/location.png"
                          className="w-3"
                          alt="location icon"
                        />
                        <p>Whitefield, Bangalore</p>
                      </div>
                    </div>
                    <div className="grid gap-y-px">
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/bed.png"
                          className="w-5"
                          alt="bed icon"
                        />
                        <p>1, 2, 3, 4, 5 BHK</p>
                      </div>
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/ruler.png"
                          className="w-5"
                          alt="ruler icon"
                        />
                        <p>625 - 3500 Sqft</p>
                      </div>
                    </div>
                    <h2>&#8377; 56,25,000</h2>
                  </div>
                  <div className="mb-1">
                    <button className="bg-primary px-8 text-white hover:bg-primary/80 rounded-xl mx-auto block text-sm">
                      Details
                    </button>
                  </div>
                </figure>
                <figure className="hottest-property-card w-64">
                  <div className="hottest-property-card-top">
                    {/* <!-- this div is for the layer above image--> */}
                    <div></div>
                    <img
                      src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                      alt="banner image"
                    />
                    <span className="hottest-property-card-top-pre">
                      Pre Launch
                    </span>
                    <span className="hottest-property-card-top-save">
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
                  <div className="grid gap-y-1 mb-2">
                    <div>
                      <h3>Prestige Park Grove</h3>
                      <div className="text-xs font-light flex items-center gap-x-1">
                        <img
                          src="/icon/location.png"
                          className="w-3"
                          alt="location icon"
                        />
                        <p>Whitefield, Bangalore</p>
                      </div>
                    </div>
                    <div className="grid gap-y-px">
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/bed.png"
                          className="w-5"
                          alt="bed icon"
                        />
                        <p>1, 2, 3, 4, 5 BHK</p>
                      </div>
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/ruler.png"
                          className="w-5"
                          alt="ruler icon"
                        />
                        <p>625 - 3500 Sqft</p>
                      </div>
                    </div>
                    <h2>&#8377; 56,25,000</h2>
                  </div>
                  <div className="mb-1">
                    <button className="bg-primary px-8 text-white hover:bg-primary/80 rounded-xl mx-auto block text-sm">
                      Details
                    </button>
                  </div>
                </figure>
                <figure className="hottest-property-card w-64">
                  <div className="hottest-property-card-top">
                    {/* <!-- this div is for the layer above image--> */}
                    <div></div>
                    <img
                      src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                      alt="banner image"
                    />
                    <span className="hottest-property-card-top-pre">
                      Pre Launch
                    </span>
                    <span className="hottest-property-card-top-save">
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
                  <div className="grid gap-y-1 mb-2">
                    <div>
                      <h3>Prestige Park Grove</h3>
                      <div className="text-xs font-light flex items-center gap-x-1">
                        <img
                          src="/icon/location.png"
                          className="w-3"
                          alt="location icon"
                        />
                        <p>Whitefield, Bangalore</p>
                      </div>
                    </div>
                    <div className="grid gap-y-px">
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/bed.png"
                          className="w-5"
                          alt="bed icon"
                        />
                        <p>1, 2, 3, 4, 5 BHK</p>
                      </div>
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/ruler.png"
                          className="w-5"
                          alt="ruler icon"
                        />
                        <p>625 - 3500 Sqft</p>
                      </div>
                    </div>
                    <h2>&#8377; 56,25,000</h2>
                  </div>
                  <div className="mb-1">
                    <button className="bg-primary px-8 text-white hover:bg-primary/80 rounded-xl mx-auto block text-sm">
                      Details
                    </button>
                  </div>
                </figure>
                <figure className="hottest-property-card w-64">
                  <div className="hottest-property-card-top">
                    {/* <!-- this div is for the layer above image--> */}
                    <div></div>
                    <img
                      src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                      alt="banner image icon"
                    />
                    <span className="hottest-property-card-top-pre">
                      Pre Launch
                    </span>
                    <span className="hottest-property-card-top-save">
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
                  <div className="grid gap-y-1 mb-2">
                    <div>
                      <h3>Prestige Park Grove</h3>
                      <div className="text-xs font-light flex items-center gap-x-1">
                        <img
                          src="/icon/location.png"
                          className="w-3"
                          alt="location icon"
                        />
                        <p>Whitefield, Bangalore</p>
                      </div>
                    </div>
                    <div className="grid gap-y-px">
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/bed.png"
                          className="w-5"
                          alt="bed icon"
                        />
                        <p>1, 2, 3, 4, 5 BHK</p>
                      </div>
                      <div className="text-xs font-normal flex items-center gap-x-1.5">
                        <img
                          src="/icon/ruler.png"
                          className="w-5"
                          alt="ruler icon"
                        />
                        <p>625 - 3500 Sqft</p>
                      </div>
                    </div>
                    <h2>&#8377; 56,25,000</h2>
                  </div>
                  <div className="mb-1">
                    <button className="bg-primary px-8 text-white hover:bg-primary/80 rounded-xl mx-auto block text-sm">
                      Details
                    </button>
                  </div>
                </figure>
              </div>
            </div>
            {/* <!-- get more details --> */}
            <div className="py-6 rounded-xl mx-0 xs:mx-4 p-4 bg-gradient-to-r from-transparent to-primary-200">
              <p className="mb-2">
                <b>Get More Details:</b>
              </p>
              <div className="p-2 grid gap-y-3 text-blue-600 [&>p>span]:underline [&>p]:flex [&>p]:items-center">
                <p>
                  <img src="/icon/link.png" className="w-5" alt="link icon" />
                  &nbsp;&nbsp;<span>Get Assetz Bloom And Dell Location</span>
                </p>
                <p>
                  <img src="/icon/link.png" className="w-5" alt="link icon" />
                  &nbsp;&nbsp;
                  <span>
                    Assetz Bloom And Dell Amenities and Specifications
                  </span>
                </p>
                <p>
                  <img src="/icon/link.png" className="w-5" alt="link icon" />
                  &nbsp;&nbsp;
                  <span>
                    Download or View Assetz Bloom And Dell Floor Plans and
                    Master Plan
                  </span>
                </p>
                <p>
                  <img src="/icon/link.png" className="w-5" alt="link icon" />
                  &nbsp;&nbsp;<span>View Assetz Bloom And Dell Gallery</span>
                </p>
                <p>
                  <img src="/icon/link.png" className="w-5" alt="link icon" />
                  &nbsp;&nbsp;
                  <span>
                    Download or View Assetz Bloom And Dell Price Details
                  </span>
                </p>
                <p>
                  <img src="/icon/link.png" className="w-5" alt="link icon" />
                  &nbsp;&nbsp;<span>An Overview of Assetz Bloom And Dell</span>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- right grid --> */}
          <div className="hidden lg:block">
            <h3 className="mb-4 text-xl text-center font-semibold">
              Overview at Glance
            </h3>
            <div className="grid grid-cols-2 gap-3 leading-5 text-xs mb-4">
              <div className="flex items-start gap-x-1  bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                <img src="/icon/land.png" className="w-5" alt="land icon" />
                <div>
                  <p>Land Area</p>
                  <b>1 Acres</b>
                </div>
              </div>
              <div className="flex items-start gap-x-1 bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                <img
                  src="/icon/calendar.png"
                  className="w-5"
                  alt="calendar icon"
                />
                <div>
                  <p>Possession Date</p>
                  <b>
                    September 11,
                    <br />
                    2024
                  </b>
                </div>
              </div>
              <div className="flex items-start gap-x-1 bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                <img
                  src="/icon/building.png"
                  className="w-5"
                  alt="building icon"
                />
                <div>
                  <p>Residential Type</p>
                  <b>Apartments</b>
                </div>
              </div>
              <div className="flex items-start gap-x-1 bg-primary-300/30 rounded-md pt-2 pb-1 pl-1 pr-3">
                <img
                  src="/icon/warehouse.png"
                  className="w-5"
                  alt="warehouse icon"
                />
                <div>
                  <p>Total Units</p>
                  <b>On Request</b>
                </div>
              </div>
            </div>
            {/* <!-- contact form --> */}
            <div className="sticky top-28 overflow-hidden mx-auto rounded-2xl shadow-round pt-2.5 text-dark bg-primary-50">
              <div className="w-56 h-56 absolute opacity-30 rounded-full -top-16 -left-10 bg-primary-200"></div>
              <img
                src="/icon/realverse-icon.png"
                className="w-14 mx-auto mb-2"
                alt="realverse icon icon"
              />
              <h1 className="text-center mb-4 text-[20px] font-semibold z-20">
                Get Instant Call Back
              </h1>
              {/* <!-- icons --> */}
              <div className="flex justify-between w-full [&>*]:flex-1 text-center text-xs mb-4 ">
                <div className="flex flex-col gap-y-1.5 items-center">
                  <img
                    src="/icon/phone-call.png"
                    className="w-5"
                    alt="phone call icon"
                  />
                  <span className="leading-4">
                    24/7
                    <br />
                    Support
                  </span>
                </div>
                <div className="flex flex-col gap-y-1.5 items-center">
                  <img src="/icon/flat.png" className="w-5" alt="flat icon" />
                  <span className="leading-4">
                    Free Site
                    <br />
                    Visit
                  </span>
                </div>
                <div className="flex flex-col gap-y-1.5 items-center">
                  <img src="/icon/label.png" className="w-5" alt="label icon" />
                  <span className="leading-4">
                    Unmatched
                    <br />
                    price
                  </span>
                </div>
              </div>
              <h1 className="text-center mb-2 font-medium">
                Cardinal Energy Cardinal one
              </h1>
              {/* <!-- forms --> */}
              <form className="w-full grid gap-y-2 px-2.5 placeholder:text-xs">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                />
                <input
                  type="text"
                  placeholder="phone no."
                  className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-0 text-xs border-b focus:ring-0 bg-transparent"
                />
                <select className="w-full text-xs border-0 border-b focus:ring-0 mb-1.5 bg-transparent">
                  <option>Interested for Site visit?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <button className="p-1 rounded-lg dark-gradient-button mb-3">
                  Enquire Now
                </button>
              </form>
              <div className="w-full divide-x p-2 divide-dark rounded-b-2xl flex [&>*]:flex-1 text-center bg-primary-200">
                <div className="flex justify-center items-center gap-x-2">
                  <img
                    src="/icon/phone-call.png"
                    className="w-5"
                    alt="phone call icon"
                  />
                  Call
                </div>
                <div className="flex justify-center items-center gap-x-2">
                  <img
                    src="/icon/whatsapp.png"
                    className="w-5"
                    alt="whatsapp icon"
                  />
                  Whatsapp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
