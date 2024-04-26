const DynamicProductPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic page component </h1>
      <p>params: {params?.productId}</p>
      {/* <p>Search Params: {searchParams.name}</p> */}
    </div>
  );
};

export default DynamicProductPage;
