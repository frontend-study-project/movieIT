import styledCommon from "../book.module.css";
import styled from "./StepOne.module.css";
import SlideList from "../components/SlideList";
import { useEffect } from "react";

const BoxTime = () => {
  const hourList = [];
  for (let i = 1; i <= 24; i++) {
    hourList.push({
      id: i,
      num: i,
    });
  }
  useEffect(() => {}, []);
  return (
    <div className={styled.box_time}>
      <h3 className={styledCommon.tit_box}>
        시간<span className={styledCommon.screen_out}>선택</span>
      </h3>
      {hourList && <SlideList list={hourList} moveX={35} />}
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
