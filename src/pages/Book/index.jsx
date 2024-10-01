import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from"./book.module.css";
import StepOne from "../../components/book/StepOne";
import StepTwo from "../../components/book/StepTwo";
import Alert from "../../components/common/Layer/Alert";
import { setBook } from "../../store/slice/book";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IosShareIcon from '@mui/icons-material/IosShare';
import { useSnackbar } from "material-ui-snackbar-provider";

const Book = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const snackbar = useSnackbar();

 const pageNum = useSelector(state => state.book.page);
 const {open} = useSelector(state => state.alert);

 const handleResetClick = () => () => {
  navigate('/book')
  dispatch(setBook({ step: "stepOne", type: "movie", data: {id: '', txt: ''} }));
  dispatch(setBook({ step: "stepOne", type: "rating", data:'' }))
  dispatch(
    setBook({
      step: "stepOne",
      type: "theater",
      data: {id: '', txt: ''},
    })
  );
}

  const handleShareClick = () => {
    navigator.clipboard.writeText(`https://movie-it-frontend-73qrtnpy6-sukyungs-projects.vercel.app/${location.pathname}${location.search}`);
    snackbar.showMessage('복사되었습니다.')
  }

  return (
    <div className={styled.cont_book}>
      <div className={styled.box_header}>
        <h2 className={styled.tit_book}>예매</h2>
        {pageNum === 1 && <div className={styled.box_btns}>
          <button type="button" className={styled.btn_reset} onClick={handleResetClick}>
            <RestartAltIcon fontSize="small">이전</RestartAltIcon>초기화
          </button>
          <button type="button" className={styled.btn_share} onClick={handleShareClick}>
            <IosShareIcon fontSize="small"></IosShareIcon>공유하기
            </button>
        </div>
        }
      </div>
      <div className={styled.wrap_book}>
        {pageNum === 1 ? <StepOne/> : <StepTwo/>}
        {open && <Alert/>}
      </div>
    </div>
  );
};
export default Book;
