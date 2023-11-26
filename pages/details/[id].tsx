import { wrapper } from '@/redux/store';
import {
  charactersAPI,
  getCharacterById,
  getCharacters,
} from '../api/apiService';
import ICardData from '@/utils/interfaces/ICardData';
import IResponseData from '../api/IResponseData';
import MainSection from '@/components/MainSection/MainSection';
import CardDetails from '@/components/Card/CardDetails/CardDetails';
import setDefaultValues from '@/utils/functions/setDefaultValues';

interface IProps {
  responseData: IResponseData<ICardData[]>;
  responseCharacter: IResponseData<ICardData>;
}

const DataCharacter = ({ responseData, responseCharacter }: IProps) => {
  return (
    <>
      <MainSection response={responseData}>
        <CardDetails card={responseCharacter.data} />
      </MainSection>
    </>
  );
};

export default DataCharacter;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query, page, limit, id } = context.query;

    const data = await store.dispatch(
      getCharacters.initiate(setDefaultValues({ query, page, limit }))
    );
    const character = await store.dispatch(
      getCharacterById.initiate((id as string) || '')
    );

    await Promise.all(
      store.dispatch(charactersAPI.util.getRunningQueriesThunk())
    );
    return {
      props: {
        responseData: data.data,
        responseCharacter: character.data,
      },
    };
  }
);
