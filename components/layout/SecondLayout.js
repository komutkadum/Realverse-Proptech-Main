import Link from 'next/link';
import { useRouter } from 'next/router';

function SecondLayout({ children }) {
  const router = useRouter();
  return (
    <>
      {/* <!-- breadcrumbs --> */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <div className="text-primary">
          <Link href="/">Home</Link> {`>`}{' '}
          <Link href={router.pathname} className="capitalize">
            {router.pathname.split('/')}
          </Link>
        </div>
      </section>

      {children}
    </>
  );
}

export default SecondLayout;
