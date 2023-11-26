import Head from 'next/head';
import { wrapper } from '@/redux/store';
import { charactersAPI, getCharacters } from './api/apiService';
import { GetServerSideProps } from 'next';
import IResponseData from './api/IResponseData';
import ICardData from '@/utils/interfaces/ICardData';
import MainSection from '@/components/MainSection/MainSection';
import setDefaultValues from '@/utils/functions/setDefaultValues';

export const getServerSideProps: GetServerSideProps<{
  response?: IResponseData<ICardData[]>;
}> = wrapper.getServerSideProps((store) => async (context) => {
  const { query, limit, page } = context.query;
  const data = await store.dispatch(
    getCharacters.initiate(setDefaultValues({ query, limit, page }))
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  await Promise.all(
    store.dispatch(charactersAPI.util.getRunningQueriesThunk())
  );

  return {
    props: {
      response: data.data,
    },
  };
});

const Home = ({ response }: { response: IResponseData<ICardData[]> }) => {
  return (
    <div className="content">
      <Head>
        <title>Home</title>
      </Head>
      <MainSection response={response} />
    </div>
  );
};

export default Home;
