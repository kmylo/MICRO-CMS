const Loading = ({ loadingTxt = "Loading..." }) => (
  <div className="loading-wrapper mt-auto">
    <span>{loadingTxt}</span>
  </div>
);

export default Loading;
