import { Skeleton } from "../ui/skeleton";

const SkeletonComp = () => {
  return (
    <div className="flex flex-row gap-5 justify-between">
      <div className="flex flex-col justify-center items-start gap-3">
        <Skeleton className="w-[270px] h-[170px]" />
        <Skeleton className="w-[270px] h-[20px]" />
        <Skeleton className="w-[270px] h-[20px]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-3">
        <Skeleton className="w-[270px] h-[170px]" />
        <Skeleton className="w-[270px] h-[20px]" />
        <Skeleton className="w-[270px] h-[20px]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-3">
        <Skeleton className="w-[270px] h-[170px]" />
        <Skeleton className="w-[270px] h-[20px]" />
        <Skeleton className="w-[270px] h-[20px]" />
      </div>
    </div>
  );
};

export default SkeletonComp;
