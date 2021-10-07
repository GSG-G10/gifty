import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function ProductCardSkeleton() {
  return (
    <Box>
      <Skeleton variant="rectangular" height={320} style={{ marginBottom: '15px' }} />
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Box style={{ width: '100%' }}>
          <Skeleton width="90%" />
          <Skeleton width="60%" />
          <Skeleton width="15%" style={{ marginTop: '20px' }} />
        </Box>
      <Skeleton variant="rectangular" width={35} height={30} />
      </Box>
    </Box>
  );
}

export default ProductCardSkeleton;
