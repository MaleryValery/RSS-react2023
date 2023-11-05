interface ISearchFormProps {
  updateCardsSection: (
    value?: string,
    pageLimit?: number,
    page?: number
  ) => Promise<void>;
  page: (page: number) => void | Promise<void>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

export default ISearchFormProps;
