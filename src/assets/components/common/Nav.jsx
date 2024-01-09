import './Nav.css'

const Nav = () => {
  const siteList = [
    { depth1: "영화" },
    { depth1: "예매" },
    { depth1: "극장" },
    {
      depth1: "이벤트",
      depth2: ["진행중 이벤트", "지난 이벤트", "당첨자 발표"],
    },
  ];
  return (
    <nav id="gnb">
      <ul className='list_gnb list_depth1'>
        {siteList.map((site, idx1) => (
          <li className={`item_depth1_${idx1 + 1}`} key={idx1}>
            <a href="">{site.depth1}</a>
            {site.depth2 && 
              <ul className='list_depth2'>
                {site.depth2.map((depth2, idx2) => <li className={`item_depth2_${idx1 + 1}`} key={idx2}><a href="">{depth2}</a></li>)}
              </ul>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
