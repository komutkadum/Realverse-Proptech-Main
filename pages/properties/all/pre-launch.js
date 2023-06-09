import ShowPropertList from '@/components/utilities/ShowPropertList';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* <!-- breadcrumbs --> */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <p className="text-primary">
          <Link href="/">Home</Link> {`>`}{' '}
          <Link href="/properties/all">Property</Link> {`>`}{' '}
          <Link href="/properties/all/pre-launch">Pre Launch</Link>
        </p>
      </section>

      <ShowPropertList title="Best Pre Launch Property In India" />
    </>
  );
}
