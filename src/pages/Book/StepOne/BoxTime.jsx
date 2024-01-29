import styledCommon from "../book.module.css";
import styled from "./StepOne.module.css";
import SlideList from "../Components/SlideList";

const BoxTime = () => {
  const dummyTimeList = [
    {id: '12', num: "12" },
    {id: '13', num: "13" },
    {id: '14', num: "14" },
    {id: '15', num: "15" },
    {id: '16', num: "16" },
    {id: '17', num: "17" },
    {id: '18', num: "18" },
    {id: '19', num: "19" },
    {id: '20', num: "20" },
    {id: '21', num: "21" },
    {id: '22', num: "22" },
    {id: '23', num: "23" },
    {id: '24', num: "24" },
  ];
  return (
    <div className={styled.box_time}>
      <h3 className={styledCommon.tit_box}>
        시간<span className={styledCommon.screen_out}>선택</span>
      </h3>
      <SlideList list={dummyTimeList} moveX={35} />
      <ul className={`${styled.list_movies} ${styledCommon.scroll}`}>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div className={styled.item_time}>
              <span className={styled.emph_time}>09:50</span>
              <div className={styled.txt_time}>~11:56</div>
            </div>
            <div className={styled.item_tit}>
              <strong className={styled.txt_tit}>웡카</strong>
              <span className={styled.txt_desc}>2D (자막)</span>
            </div>
            <div className={styled.item_info}>
              <span className={styled.txt_theater}>
                코엑스
                <br /> 컴포트3관
              </span>
              <span className={styled.wrap_seat}>
                <span className={styled.num_left}>253</span>/
                <span className={styled.num_total}>348</span>
              </span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default BoxTime;
