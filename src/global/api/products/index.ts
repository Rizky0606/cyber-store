import axiosInstance from "@/lib/axiosInstance";

export const getAllProducts = async ({
  page,
  limit,
}: {
  page: number | null;
  limit: number | null;
}) => {
  let url = `/products?_page=${page}&_per_page=10`;

  if (limit) {
    url += `&_limit=${limit}`;
  }
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getDetailProduct = async ({ id }: { id: string | undefined }) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};
