const ErrorGeneratedPage = () => {
  throw new Error("error from error generating page");
  return (
    <div>
      <h1>This is error generating page</h1>
    </div>
  );
};

export default ErrorGeneratedPage;
