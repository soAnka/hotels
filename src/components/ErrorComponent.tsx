const ErrorComponent = () => {
  return (
    <div className="flex h-screen flex-wrap items-center justify-center bg-gray-200">
      <div className="bg-error-illustration relative m-8 h-128 rounded-full bg-cover bg-center bg-no-repeat">
        <div className="h1-96 absolute -inset-y-52 right-0 mr-20 mt-10 flex w-96 flex-col items-center justify-center rounded-full border-2 "></div>
        <h1>Oooops!</h1>
        <p>Sorry, something went wrong...</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
