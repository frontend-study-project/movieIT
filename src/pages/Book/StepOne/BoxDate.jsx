import styled from "./StepOne.module.css";
import SlideList from "../Components/SlideList";

const BoxDate = () => {
  const dummyDateList = [
    { num: "16", txt: "오늘" },
    { num: "17", txt: "내일" },
    { num: "18", txt: "목" },
    { num: "19", txt: "금" },
    { num: "20", txt: "토" },
    { num: "21", txt: "일" },
    { num: "22", txt: "월" },
    { num: "23", txt: "화" },
    { num: "24", txt: "수" },
    { num: "25", txt: "목" },
    { num: "26", txt: "금" },
    { num: "27", txt: "토" },
    { num: "28", txt: "일" },
    { num: "29", txt: "월" },
    { num: "30", txt: "화" },
    { num: "31", txt: "수" },
    { num: "1", txt: "목" },
  ];
  return (
    <div className={styled.box_date}>
      <h3 className="screen_out">날짜 선택</h3>
      <SlideList list={dummyDateList} yearInfo={true} />
    </div>
  );
};
export default BoxDate;
