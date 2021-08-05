import Head from "next/head";
import { PageContainer } from "@/styles/Common.styles";
import HomeComponent from "@/components/HomeComponent/HomeComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <PageContainer>
        <HomeComponent />
      </PageContainer>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
