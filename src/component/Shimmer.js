const Shimmer = () => {
  return (
    <div className="shimmer-container">
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
