import ShowPropertList from '@/components/utilities/ShowPropertList';
import Link from 'next/link';
import { useRouter } from 'next/router';

function City() {
  const router = useRouter();
  return (
    <>
      {/* <!-- breadcrumbs --> */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <p className="text-primary">
          <Link href="/">Home</Link> {`>`}{' '}
          <Link href="/properties/all">Property</Link> {`>`}{' '}
          <Link
            href={`/properties/${router.query.city}`}
            className="capitalize"
          >
            {router.query.city}
          </Link>
        </p>
      </section>

      <ShowPropertList title={`Properties in ${router.query.city}`} />
    </>
  );
}

export default City;
