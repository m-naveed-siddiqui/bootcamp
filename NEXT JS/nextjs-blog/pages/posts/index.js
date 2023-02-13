import Link from "next/link";
import Head from "next/head";
import Layout, {siteTitle, name} from "../../components/layout";

export default function Posts() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>List of Posts</h1>
                <div>
                    <h3>
                        <ul>
                            <li>
                                <Link href="posts/first-post">First Post</Link>
                            </li>
                            <li>
                                <Link href="posts/second-post">Second Post</Link>
                            </li>
                        </ul>
                    </h3>
                </div>
            </section>
        </Layout>
    );
}