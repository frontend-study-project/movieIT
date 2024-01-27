
import "./book.css";
import StepOne from "./stepOne";
import StepTwo from "./StepTwo";

const Ticket = () => {
  
  return (
    <div className='cont_book'>
      <h2 className='tit_book'>예매</h2>
      <div className='wrap_book '>
        <StepOne/>
        {/* <StepTwo/> */}
      </div>
    </div>
  );
};
export default Ticket;
