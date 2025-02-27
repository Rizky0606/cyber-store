import { useNavigate } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadcrumbComp = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10 mx-40">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{categoryName}</BreadcrumbLink>
              </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComp;
