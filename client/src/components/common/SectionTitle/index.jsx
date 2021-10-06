import { Typography } from '@mui/material';
import './style.css';

function SectionTitle({content}) {
  return (
    <Typography variant="h5" component="h5" className="section-title" sx={{marginBottom: '50px' }}>
      {content}
    </Typography>
  )
}

export default SectionTitle
