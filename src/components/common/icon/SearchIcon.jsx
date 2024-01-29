import { useMemo } from "react";

const SearchIcon = ({ width, height, black = false }) => {
  const style = useMemo(() => ({
    display: 'block',
    width: `${width || 18}px`,
    height: `${height || 18}px`,
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(/images/icon/ico-search${black ? '' : '-white'}.png)`,
    backgroundPosition: 'center',
  }), [width, height, black]);

  return <i style={style} />
};

export default SearchIcon;
