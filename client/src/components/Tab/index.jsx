import { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import './style.css';
import rateImg from './rate.png';
import TabPanel from '../common/TabPanel';

function TabComponent({ description, productId }) {
  const [value, setValue] = useState(0);
  const [addComment, setAddComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError('');
  };

  useEffect(() => {
    axios
      .get(`/comments/${productId}`)
      .then((response) => response.data)
      .then(({ data }) => setComments(data))
      .catch((err) => setError(err.response.data.Error));
  }, []);

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendComment = () => {
    if (addComment) {
      axios
        .post('/addComment', {
          productId,
          description: addComment,
        })
        .then((response) => response.data)
        .then((data) => {
          setComments((prev) => {
            const newState = [
              {
                description: addComment,
                username: '',
              },
              ...prev,
            ];
            return newState;
          });
          setAddComment('');
          setSuccess(data.msg);
        })
        .catch((err) => setError(err.response.data.Error));
    }
  };

  return (
    <>
      <Box className="tab-container">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="black"
            indicatorColor="black"
          >
            <Tab
              selected
              selectionFollowsFocus
              label="Description"
              {...a11yProps(0)}
            />
            <Tab label="Reviews" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Card
          className='card'
            component="div"
            sx={{
              width: '100%',
              wordBreak: 'break-all',
              backgroundColor: '#FAF6FF',
              height: '100%',
              padding: '20px',
            }}
          >
            {description}
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card
            className='card'
            component="div"
            sx={{
              width: '100%',
              wordBreak: 'break-all',
              backgroundColor: '#FAF6FF',
              height: '100%',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: '2vh',
            }}
          >
            <InputBase
              style={{ width: '90%' }}
              placeholder="Add a Comments"
              value={addComment}
              onChange={(e) => setAddComment(e.target.value)}
            />
            <SendIcon style={{ cursor: 'pointer' }} onClick={sendComment} />
          </Card>
          {comments.length
            ? comments.map((elem) => (
                  <Card
                  className='card'
                  key={elem.description}
                    sx={{
                      backgroundColor: '#FAF6FF',
                      marginBottom: '2vh',
                    }}
                  >
                    <CardContent
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        padding: '20px',
                        width: '100%',
                        margin: '0 auto',
                      }}
                    >
                      <Box
                        style={{
                          width: '80%',
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {elem.username}
                        </Typography>
                        <Typography variant="h7">{elem.description}</Typography>
                      </Box>
                      <Typography style={{ width: '10%', marginTop: '20px' }}>
                        <img src={rateImg} />
                      </Typography>
                    </CardContent>
                  </Card>
            ))
            : <h5>No Comments</h5>}
        </TabPanel>
      </Box>

      <Snackbar open={Boolean(error)} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Snackbar open={Boolean(success)} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="success">{success}</Alert>
      </Snackbar>
    </>
  );
}

export default TabComponent;
