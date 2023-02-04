import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* ... */}
    </div>
  )
}

export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context.req.headers);

  const { referer } = context.req.headers;
  if (referer?.includes("facebook.com")) {
    const url = new URL(referer);
    const path = url.pathname + url.search;

    return {
      redirect: {
        destination: "https://rocksview.us" + path,
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return { props: {} };
}
