interface IPaginatinProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: number) => void;
  isNextPage: boolean;
}

export default IPaginatinProps;
