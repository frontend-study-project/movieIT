
import { useState } from "react";
import styled from"./book.module.css";
import StepOne from "./stepOne";
import StepTwo from "./StepTwo";

const Ticket = () => {
  const [selectedMoiveInfo, setSelectedMovieInfo] = useState({
    movie: '',
    theater: {area: '', place: ''},
    time: ''
  })
  
  return (
    <div className={styled.cont_book}>
      <h2 className={styled.tit_book}>예매</h2>
      <div className={styled.wrap_book}>
        <StepOne/>
        {/* <StepTwo/> */}
      </div>
    </div>
  );
};
export default Ticket;
