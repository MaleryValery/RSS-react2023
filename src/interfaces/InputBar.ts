export interface SearchInputBarProps {
  onChange: (text?: string) => Promise<void>;
}

export interface SearchInputBarState {
  searchValue: string;
}
