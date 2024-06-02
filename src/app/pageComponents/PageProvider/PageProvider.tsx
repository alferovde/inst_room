import React from "react";
type PageProvider = {
  children: React.ReactNode;
  isLoading: boolean;
  isError: string;
};

const PageProvider = ({ children, isError, isLoading }: PageProvider) => {
  return (
    <div>
      {isLoading ? (
        <div className="container"> "Loading..."</div>
      ) : isError ? (
        <div className="container">{isError}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default PageProvider;
