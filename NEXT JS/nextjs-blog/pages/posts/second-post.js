import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function SecondPost() {
    return (
        <Layout>
            <Head>
                <title>Second Post</title>
            </Head>
            <Link href="/posts">Posts</Link>
            <h1>Second Post</h1>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </Layout>
    );
}