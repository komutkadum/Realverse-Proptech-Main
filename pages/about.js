import SecondLayout from '@/components/layout/SecondLayout';

/* eslint-disable @next/next/no-img-element */
function About() {
  return (
    <SecondLayout>
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <h3 className="text-center text-xl font-semibold mb-8">
          Buy Properties in India At Low Prices.
        </h3>
        <h3 className="text-xl font-medium mb-2">About Us</h3>
        <div className="flex flex-col md-lg:flex-row gap-8 text-lg font-light">
          <div>
            <p className="mb-2">
              <b className="font-medium">Realverse Proptech</b>, was founded in
              the month of January in 2020. Realverse Proptech is a company
              which provides One Stop Solution to all your realty investments.
              We thrive to get the best possible opportunity for both our
              investors. We believe in transparency of transactions and
              uniformity in contracts, our forte is in real estate advisory and
              we believe every buying experience should be simple and successful
              accomplishment of making your dream into reality. The driving
              force behind it is our team of real estate advisors is customer
              satisfaction, credibility and professionalism.
            </p>
            <p className="mb-2">
              We at Realverse Proptech meticulously mentor our staff not only to
              find you a property but also use Real Estate as a tool to add to
              your assets. There is no denying the fact that buying a property
              in India is a cumbersome process as consumers require real time
              advice, property comparison, property tours, legal and home loan
              assistance to make this major decision of their lives.
            </p>
            <p className="mb-2">
              Keeping this in mind and to serve you well on every aspect, our
              group of specialists at Realverse Proptech spend countless work
              hours assessing every single undertaking. The final result is that
              you are unchained from the problems which an individual goes
              through for investing in real estate.
            </p>
          </div>
          <div>
            <img src="/images/about-us.webp" className="mb-4" alt="About us" />
            <p className="mb-2">
              We understand that people everywhere are searching for a home to
              call their own. We want to make this search as joyful as finally
              finding the perfect home because we understand that finding a home
              is much more than an online search!
            </p>
            <p className="mb-2">
              A home is a cherished memory that lasts forever, it is where the
              walls embrace memories, the ceilings shelter love and laughter,
              where the quiet corners offer a much-needed pause and life itself
              becomes a reason to celebrate. So to make this journey joyful, we
              begin by partnering with our customers from the start and being
              there when it matters the most – right from online search to
              brokers to home loans to paperwork to finally finding that perfect
              home.
            </p>
          </div>
        </div>
      </section>
    </SecondLayout>
  );
}

export default About;
