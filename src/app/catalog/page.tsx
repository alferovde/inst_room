import React from "react";
import PageProvider from "../pageComponents/PageProvider/PageProvider";
const CatalogPage = () => {
  let isLoading = false;
  let isError = "ssss";
  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      CatalogPage
    </PageProvider>
  );
};

export default CatalogPage;
