import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const PaginationComp = ({
  totalPage,
  setCurrentPage,
}: {
  totalPage: number | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="cursor-pointer" />
        </PaginationItem>
        {totalPage && totalPage > 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => {
              setCurrentPage(totalPage || 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComp;
