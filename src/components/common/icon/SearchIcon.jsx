import { useMemo } from "react";

const SearchIcon = ({ width, height }) => {
  const style = useMemo(() => ({
    display: 'block',
    width: `${width || 18}px`,
    height: `${height || 18}px`,
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/images/icon/ico-search-white.png)',
    backgroundPosition: 'center',
  }), [width, height]);

  return <i style={style} />
};

export default SearchIcon;
