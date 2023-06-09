import SecondLayout from '@/components/layout/SecondLayout';

/* eslint-disable @next/next/no-img-element */
function Contact() {
  return (
    <SecondLayout>
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <h3 className="text-center text-lg md:text-xl font-semibold mb-8 px-1 sm:px-20">
          Contact Us For Buying New Construction, Ready To Move, Under
          Constructions Properties in India
        </h3>
        <h3 className="text-xl font-medium mb-2">Contact Us</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <p className="mb-4">
              At New Property Details, we work seamlessly together as one firm
              to serve our clients and customers whenever they need us. Call us
              or drop us an e-mail, and we&apos;ll get back to you as soon as we
              can.
            </p>
            <div className="flex items-center gap-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2274A5"
                fill="#2274A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
              <span>+918282848484</span>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                fill="#2274A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <span>support@realverse.com</span>
            </div>
          </div>
          <div className="px-1">
            <div className="max-w-[21rem] md:w-[21rem] overflow-hidden relative mx-auto rounded-2xl shadow-round pt-2.5 bg-blue-50">
              <div className="w-56 h-56 absolute opacity-30 rounded-full -top-16 -left-10 bg-blue-200"></div>
              <img
                src="/icon/realverse-icon.png"
                className="w-14 mx-auto mb-4"
                alt="realverse icon"
              />
              {/* <!-- icons --> */}
              <div className="flex justify-between w-full text-center text-xs mb-2.5 px-5">
                <div className="flex flex-col gap-y-1.5 items-center">
                  <img
                    src="/icon/phone-call.png"
                    className="w-5"
                    alt="phone icon"
                  />
                  <span className="leading-4">24/7 Support</span>
                </div>
                <div className="flex flex-col gap-y-1.5 items-center">
                  <img src="/icon/flat.png" className="w-5" alt="flat icon" />
                  <span className="leading-4">Free Site Visit</span>
                </div>
                <div className="flex flex-col gap-y-1.5 items-center">
                  <img src="/icon/label.png" className="w-5" alt="label icon" />
                  <span className="leading-4">Unmatched price</span>
                </div>
              </div>
              {/* <!-- forms --> */}
              <form className="w-full grid gap-y-2 px-2.5 sm:px-5 mb-1">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-0 border-b focus:ring-0 bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Number"
                  className="w-full border-0 border-b focus:ring-0 bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-0 border-b focus:ring-0 bg-transparent"
                />
                <select className="w-full border-0 border-b focus:ring-0 mb-2.5 bg-transparent">
                  <option>Interested for Site visit?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <button className="p-1 rounded-lg text-white bg-primary mb-2">
                  Enquire Now
                </button>
              </form>
              <div className="w-full divide-x p-2 divide-primary rounded-b-2xl flex [&>*]:flex-1 text-center bg-blue-200">
                <div className="flex justify-center items-center gap-x-2">
                  <img
                    src="/icon/phone-call.png"
                    className="w-5"
                    alt="phone icon"
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
    </SecondLayout>
  );
}

export default Contact;
