import { FC } from "react";
import "./Card.css"
// import { Link } from "react-router-dom";
type AppProps = {
  page: number;
  limit: number;
  databook: any;
};

const Card: FC<AppProps> = ({ page, limit, databook }) => {
  const endIndex: number = limit * page;
  const startIndex: number = endIndex - limit;
  return databook.slice(startIndex, endIndex).map((book: any) => {
    console.log(book.thumbnailUrl);
    return (
      <div key={book.id} className="col-3 mb-4 ">
        <div key={book.id} className="rectangle">
          <div className="BoxImg">
            <img src={book.thumbnailUrl} alt="Shoes" />
          </div>

          <div className="content">
            <h4 className="my-heading">{book.title}</h4>

            {/* <h4 className="my-heading">{book.title}</h4> */}
            <p className="TextCard ms-2">{book.authors[0]}</p>

            {book.categories.map((item: []) => {
              return (
                <div className="ButCategory">
                  <p className="TextCard">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
