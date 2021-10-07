import { Typography } from '@mui/material';
import './style.css';

function SectionTitle({ content }) {
  return (
    <Typography variant="h5" component="h5" className="section-title">
      {content}
    </Typography>
  );
}

export default SectionTitle;
