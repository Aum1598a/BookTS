import { FC, useEffect, useState } from "react";
import { fetchAllBook } from "../action/index";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Hompage: FC = () => {
  interface datatype {
    isbn: string;
    pageCount: number;
    authors: [];
    categories: [];
    longDescription: string;
    shortDescription: string;
    publishedDate: {
      date: string;
    };
    status: string;
    thumbnailUrl: string;
    title: string;
  }
  [];
  const [count, setcount] = useState<number>(0);
  const [page, setpage] = useState<number>(1);
  let limit: number = 20;
  const pagenumber: number = Math.ceil(count / limit);
  const [book, setbook] = useState<datatype[]>([]);
  useEffect(() => {
    const getAllBooks = async () => {
      const books = await fetchAllBook()();
      setbook(books.data);
      setcount(books.data.length);
    };
    getAllBooks();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <Card page={page} limit={limit} databook={book} />
      </div>
      <div className="row">
        <Pagination pageAll={pagenumber} pageStart={page} setpage={setpage} />
      </div>
    </div>
  );
};

export default Hompage;
