import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Signin from '../../components/SignForms/Signin';
import Signup from '../../components/SignForms/signup';
import TabPanel from '../../components/common/TabPanel';
import './style.css';

function Register() {
  const [value, setValue] = useState(0);

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="tab-container2">
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
              label="Register/"
              {...a11yProps(0)}
            />
            <Tab label="Login" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            component="div"
            sx={{
              width: '100%',
              wordBreak: 'break-all',
              height: '100%',

            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14, margin: '8px 0 16px' }} gutterBottom>
                Create a new account. Once you‘ve set it up, you can take
                advantage of many benifits of membership.
              </Typography>

              <Signup />
            </CardContent>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            component="div"
            sx={{
              width: '100%',
              wordBreak: 'break-all',
              height: '100%',
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14, margin: '20px 0' }} gutterBottom>
                Create a new account. Once you‘ve set it up, you can take
                advantage of many benifits of membership.
              </Typography>

              <Signin />
            </CardContent>
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}

export default Register;
