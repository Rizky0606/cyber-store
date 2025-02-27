import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import ImageViewer from "./ImageViewer";
import ContentDetail from "./ContentDetail";
import { getDetailProduct } from "@/global/api/products";
import Loading from "@/components/ui/loading";

const MainInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["detailProduct"],
    queryFn: () => getDetailProduct({ id: id }),
  });

  if (isLoading) return <Loading />;
  // if (error) return <Toast

  return (
    <div className="flex flex-row mx-40">
      <ImageViewer />
      <ContentDetail data={data} />
    </div>
  );
};

export default MainInfo;
