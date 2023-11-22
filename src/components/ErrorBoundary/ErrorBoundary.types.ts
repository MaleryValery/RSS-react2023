import { ReactNode } from 'react';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  isError: boolean;
}

export type { IErrorBoundaryProps, IErrorBoundaryState };
