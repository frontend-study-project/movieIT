import { useSelector } from "react-redux";
import styled from"./book.module.css";
import StepOne from "../../components/book/StepOne";
import StepTwo from "../../components/book/StepTwo";
import Alert from "../../components/common/Layer/Alert";

const Book = () => {
 const pageNum = useSelector(state => state.book.page);

 const {open} = useSelector(state => state.alert);

  return (
    <div className={styled.cont_book}>
      <h2 className={styled.tit_book}>예매</h2>
      <div className={styled.wrap_book}>
        {pageNum === 1 ? <StepOne/> : <StepTwo/>}
        {open && <Alert/>}
      </div>
    </div>
  );
};
export default Book;
