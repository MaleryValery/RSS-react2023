interface ISearchFormProps {
  updateCardsSection: (
    value?: string,
    pageLimit?: number,
    page?: number
  ) => Promise<void>;
  page: (page: number) => void | Promise<void>;
}

export default ISearchFormProps;
