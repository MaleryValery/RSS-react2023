interface ISearchFormProps {
  updateCardsSection: (value?: string) => Promise<void>;
  page: (page: number) => void | Promise<void>;
}

export default ISearchFormProps;
