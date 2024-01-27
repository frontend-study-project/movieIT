import styled from './StepOne.module.css';

const BoxTheater = () => {
  const dummyTheaterList = [
    {
      id: 1,
      area_depth1: "서울",
      area_depth2: [
        { id: "11", txt: "강남" },
        { id: "12", txt: "강남대로" },
        { id: "13", txt: "강동" },
        { id: "14", txt: "군자" },
        { id: "15", txt: "더부티크 목동현대백화점" },
        { id: "16", txt: "동대문" },
        { id: "17", txt: "더부티크 목동현대백화점" },
        { id: "18", txt: "마곡" },
        { id: "19", txt: "남양주현대아울렛 스페이스원" },
        { id: "20", txt: "더부티크 목동현대백화점" },
        { id: "21", txt: "더부티크 목동현대백화점" },
        { id: "22", txt: "더부티크 목동현대백화점" },
        { id: "23", txt: "더부티크 목동현대백화점" },
        { id: "24", txt: "더부티크 목동현대백화점" },
        { id: "25", txt: "더부티크 목동현대백화점" },
        { id: "26", txt: "더부티크 목동현대백화점" },
        { id: "27", txt: "더부티크 목동현대백화점" },
        { id: "28", txt: "더부티크 목동현대백화점" },
        { id: "29", txt: "더부티크 목동현대백화점" },
        { id: "30", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 2,
      area_depth1: "경기",
      area_depth2: [
        { id: "31", txt: "고양스타필드" },
        { id: "32", txt: "광명AK플라자" },
        { id: "33", txt: "광명소호" },
        { id: "34", txt: "군자" },
        { id: "35", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 3,
      area_depth1: "인천",
      area_depth2: [
        { id: "41", txt: "고양스타필드" },
        { id: "42", txt: "광명AK플라자" },
        { id: "43", txt: "광명소호" },
        { id: "44", txt: "군자" },
        { id: "45", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 4,
      area_depth1: "대전/충청/세종",
      area_depth2: [
        { id: "51", txt: "고양스타필드" },
        { id: "52", txt: "광명AK플라자" },
        { id: "53", txt: "광명소호" },
        { id: "54", txt: "군자" },
        { id: "55", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 5,
      area_depth1: "부산/대구/경상",
      area_depth2: [
        { id: "61", txt: "고양스타필드" },
        { id: "62", txt: "광명AK플라자" },
        { id: "63", txt: "광명소호" },
        { id: "64", txt: "군자" },
        { id: "65", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 6,
      area_depth1: "광주/전라",
      area_depth2: [
        { id: "71", txt: "고양스타필드" },
        { id: "72", txt: "광명AK플라자" },
        { id: "73", txt: "광명소호" },
        { id: "74", txt: "군자" },
        { id: "75", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 7,
      area_depth1: "강원",
      area_depth2: [
        { id: "81", txt: "고양스타필드" },
        { id: "82", txt: "광명AK플라자" },
        { id: "83", txt: "광명소호" },
        { id: "84", txt: "군자" },
        { id: "85", txt: "더부티크 목동현대백화점" },
      ],
    },
    {
      id: 8,
      area_depth1: "제주",
      area_depth2: [
        { id: "91", txt: "고양스타필드" },
        { id: "92", txt: "광명AK플라자" },
        { id: "93", txt: "광명소호" },
        { id: "94", txt: "군자" },
        { id: "95", txt: "더부티크 목동현대백화점" },
      ],
    },
  ];
  return <div className={styled.box_theater}>
  <h3 className='tit_box'>
    극장<span className='screen_out'>선택</span>
  </h3>
  <div className={styled.inner_theater}>
    <ul className={styled.list_area}>
      {dummyTheaterList.map((item, index) => (
        <li key={item.id}>
          <button type="button" className={index === 2 ? styled.on : null}>{item.area_depth1}</button>
          <ul className={`${styled.list_theater} scroll`}>
            {item.area_depth2.map((item2, idx) => <li key={item2.id}><button type="button" className={idx === 2 ? styled.on : null}>{item2.txt}</button></li>)}
          </ul>
        </li>
      ))}
    </ul>
  </div>
</div>
}
export default BoxTheater;