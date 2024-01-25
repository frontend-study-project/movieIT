import { Skeleton } from "@mui/material";

const TickListSkeleton = () => {
  const SKELETON_LENGHT = 5;

  return (
    <>
      {Array.from({ length: SKELETON_LENGHT }).map((_, index) => (
        <Skeleton 
          key={index} 
          variant="rounded" 
          animation="wave" 
          height={60}
          style={{ marginBottom: '5px' }}
        />
      ))}
    </>
  )
};

export default TickListSkeleton;
