const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-cyan-600"
        role="status"
      ></div>
      <span>Loading...</span>
    </div>
  );
};

export default Spinner;
