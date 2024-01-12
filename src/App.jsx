import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, Typography, Tabs, Tab, AppBar, Toolbar, Card, CardContent, CardMedia } from '@mui/material';

const theme = createTheme();

const App = () => {
  const [tabIndex, setTabIndex] = useState('0');

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
        {/* Header */}
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="inherit" style={{ marginRight: 'auto' }}>
              <Tab label="영화" value="0" />
              <Tab label="예매" value="1" />
            </Tabs>
            <Typography variant="h6" style={{ flex: 1, textAlign: 'center' }}>
              TeraBox
            </Typography>
            <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="inherit" style={{ marginLeft: 'auto' }}>
              <Tab label="극장" value="2" />
              <Tab label="이벤트" value="3" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Container>
          <Box display="flex" gap={7} style={{ marginTop: '50px' }}>
            <Card style={{ width: '600px' }}>
              <CardMedia component="img" height="500" image="src\image\1.jpg" style={{ objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6" style={{ textAlign: 'center', marginTop: '10px' }}>
                  외계+인 2부
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ width: '600px' }}>
              <CardMedia component="img" height="500" image="src\image\2.jpg" style={{ objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6" style={{ textAlign: 'center', marginTop: '10px' }}>
                  위시
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ width: '600px' }}>
              <CardMedia component="img" height="500" image="src\image\3.jpg" style={{ objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6" style={{ textAlign: 'center', marginTop: '10px' }}>
                  서울의 봄
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
