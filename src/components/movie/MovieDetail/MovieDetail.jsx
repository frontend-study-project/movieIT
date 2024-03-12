import { useLocation, useParams } from "react-router-dom";
import styled from './moviedetail.module.css';
import { Button, CardMedia } from "@mui/material";
import { getImageUrl } from "../../../hooks/useImageUrl";
import { useEffect, useState } from "react";
const MovieDetail = () => {
    const location  = useLocation();
    const [detail,setDetail] = useState({});

    useEffect(() => {
        setDetail(location.state)
    },[location])
    
    return(
        <div className={styled.wrapper}>
            <div className={styled.bg_img} style={{backgroundImage: `url(${getImageUrl(detail.backdropPath)})`}}/>
            {/* <CardMedia
              component="img"
              image={location.state? getImageUrl(location.state.backdropPath) : image}
            /> */}
           <div className={styled.bgpattern}></div>
           <div className={styled.bgmask}></div>
           <div className={styled.deaitl_content}>
             <p className={styled.title}>{detail.name}</p>
             <p className={styled.eng_title}>{detail.engName}</p>
             <div className={styled.button_util}>
                <button variant="outlined" className={styled.button}>
                  <i className={styled.heart} />
                  <span className={styled['heart-num']}>{detail.heart}</span>
               </button>
               <button className={styled.button}>
                 <i className={styled.iconset}></i>
                   공유하기
               </button>
             </div>
             <div className={styled.info}>
                <div className={styled.score}>
                <p className="tit">실관람 평점</p>
                <div className="number" id="mainMegaScore">
				  <p title="실관람 평점" className="before"><em>{detail.voteAverage}</em><span class="ir"></span></p>
				</div>
                </div>
             </div>
             <div className={styled.poster}>
                
             </div>
           </div>

        </div>
    )
}
export default MovieDetail;