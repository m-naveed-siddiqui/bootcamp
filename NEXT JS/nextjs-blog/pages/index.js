import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle, name} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m {name}. I’m a software engineer. You can see my <Link href="posts">Blogs</Link>.</p>
      </section>
    </Layout>
  )
}
