import { PaginationStyle } from "./PaginationStyles";
import { IPagination } from "../../interfaces/IPagination";
import { Button } from "react-bootstrap/";

const maxItens = 9;
const maxLeft = (maxItens - 1) / 2;

const Pagination: React.FC<IPagination> = ({
  limit,
  total,
  offset,
  setOffSet,
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  pages;
  const first = Math.max(current - maxLeft, 1);

  return (
    <PaginationStyle>
      {Array.from({ length: maxItens }).map((_, index) => (
        <li key={index}>
          <Button
            style={{ margin: "auto 3px" }}
            onClick={() => setOffSet((index + first - 1) * limit)}
          >
            {index + first}
          </Button>
        </li>
      ))}
    </PaginationStyle>
  );
};

export default Pagination;
