import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonBox({width, height, color}) {
  return (
    <Stack spacing={1}>
      <Skeleton animation="wave" sx={{ bgcolor: `grey.${color}` }} variant="rounded" width={width} height={height} />
    </Stack>
  );
}