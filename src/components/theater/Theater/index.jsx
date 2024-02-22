import { useState } from 'react';
import { Box, Tabs, Tab, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';

const TheaterList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography variant="h5" fontWeight="bold" marginBottom={3} marginTop={4}>
        전체극장
      </Typography>
      <Box width={1000} height={400} borderRadius={5} boxShadow={3} p={5}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary">
            <Tab sx={{ px: 4.5 }} label="서울" />
            <Tab sx={{ px: 4.5 }} label="경기" />
            <Tab sx={{ px: 4.5 }} label="인천" />
            <Tab sx={{ px: 4.5 }} label="대전/충청/세종" />
            <Tab sx={{ px: 4.5 }} label="부산/대구/경상" />
            <Tab sx={{ px: 4.5 }} label="광주/전라" />
            <Tab sx={{ px: 4.5 }} label="강원" />
            <Tab sx={{ px: 4.5 }} label="제주" />
          </Tabs>
        </Box>
        <List value={value}>
          <Paper elevation={1} square style={{ height: 370 }}>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">강남</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">강남대로(씨티)</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">강동</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">군자</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">더 부티크 목동현대백화점</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">동대문</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">마곡</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">목동</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">상봉</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">상암월드컵경기장</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">성수</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">센트럴</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">송파파크하비오</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">신촌</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">이수</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">창동</Typography>}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText style={{ flex: 1, marginLeft: 10 }} primary={<Typography variant="body1">코엑스</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">홍대</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">화곡</Typography>}></ListItemText>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <ListItemText style={{ flex: 1, marginLeft: 20 }} primary={<Typography variant="body1">ARTNINE</Typography>}></ListItemText>
            </ListItem>
          </Paper>
        </List>

        {/* <Typography variant="body1" style={{ padding: '16px' }}>
  {value === 0 && '강남'}
  {value === 1 && '고양스타필드'}
  {value === 2 && '검단'}
</Typography> */}
      </Box>
    </>
  );
};
export default TheaterList;
