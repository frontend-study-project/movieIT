import { useSelector } from "react-redux";
import styled from"./book.module.css";
import StepOne from "./stepOne";
import StepTwo from "./StepTwo";

const Book = () => {
 const pageNum = useSelector(state => state.book.pageNum);
  return (
    <div className={styled.cont_book}>
      <h2 className={styled.tit_book}>예매</h2>
      <div className={styled.wrap_book}>
        {pageNum === 1 ? <StepOne/> : <StepTwo/>}
      </div>
    </div>
  );
};
export default Book;
