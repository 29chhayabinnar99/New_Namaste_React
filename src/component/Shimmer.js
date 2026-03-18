const Shimmer = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-5 justify-center">
      {[...Array(20)].map((_, index) => (
        <h1 key={index} className="card"></h1>
      ))}
      {/* <h1 className="card"></h1>
      <h1 className="card"></h1>
      <h1 className="card"></h1>
      <h1 className="card"></h1>
      <h1 className="card"></h1> */}
    </div>
  );
};
export default Shimmer;
