import React, { ReactNode } from "react";
import { SWRResponse } from "swr";
type PageProvider = {
  children: React.ReactNode;
  isLoading: boolean;
  error: string;
};

const PageProvider = ({ children, error, isLoading }: PageProvider) => {
  return (
    <div>
      {isLoading ? (
        <div className="container"> "Loading..."</div>
      ) : error ? (
        <div className="container">{error}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default PageProvider;
