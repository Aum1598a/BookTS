import { FC } from "react";

type PropsPagination = {
  pageAll: number;
  setpage: (page: number) => void; // setpage รับ argument เป็น number
  pageStart: number;
};

const Pagination: FC<PropsPagination> = ({ pageAll, setpage, pageStart }) => {
  const buttonPage = pageStart;
  const PageHigh = pageAll;
  const element = [];
  let i = 4;
  if (pageAll > 5) {
    for (let index = 1; index <= 5; index++) {
      if (buttonPage != 1 && index <= 3) {
        if (buttonPage <= pageAll - 4) {
          element.push(pageStart - 1);
        } else {
          element.push(PageHigh - i);
        }
      } else if (index <= 3) {
        element.push(pageStart);
      } else if (index === 4) {
        if (buttonPage <= pageAll - 4) {
          element.push("...");
        } else {
          element.push(pageAll - 1);
        }
      } else {
        element.push(pageAll);
      }
      pageStart = pageStart + 1;
      i = i - 1;
    }
  } else {
    for (let index = 1; index <= pageAll; index++) {
      element.push(index);
    }
  }

  const shoot = (item: number) => { // กำหนด type ของ item เป็น number
    setpage(item);
    console.log(item);
  };

  return (
    <div className="d-print-flex">
      {element.map((item) => {
        return (
          <div>
            <button className="btn btn-primary" onClick={() => shoot(item)}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
