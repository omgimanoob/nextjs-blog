import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a soon-to-be-nextjs-developer</p>
        <p>
          Woohoo this works.
        </p>
        <p>Read the first blog post <Link href="/posts/first-post">here</Link>.</p>
      </section>
    </Layout>
  );
}