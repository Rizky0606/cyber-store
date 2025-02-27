import { toast } from "react-toastify";

export const Toast = {
  success: ({ text = "Success" }) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
  },
  error: ({ text = "Error" }) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
  },
};
