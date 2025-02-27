import "@/style/loading.css";

const Loading = () => {
  return (
    <div className="min-w-full min-h-full flex justify-center items-center">
      <div className="loader-circle-27">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
