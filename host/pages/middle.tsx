import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
// import MiddlePage from 'remote/middle'

//@ts-ignore
const Middle = dynamic(import('remote/middle').then((mod) => mod.Page_Middle), {ssr: true});

const Page_Middle = () => {
  return (
    <div>
      <Middle />
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = await import('remote/middle');

  if (page.getServerSideProps) {
    return page.getServerSideProps(context);
  }

  return {
    props: {},
  };
}

export default Page_Middle