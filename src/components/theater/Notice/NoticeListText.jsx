import Paper from '@mui/material/ListItem';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { notices } from '../../../data/notice/noticeList';
import styled from './noticeListText.module.css';

const NoticeListText = ({ flexValues }) => {
  return (
    <>
      {notices.map(el => {
        <Paper key={el.id} elevation={1} className={styled.paper}>
          {flexValues.map((flex, index) => (
            <ListItemText
              key={index}
              style={{ flex }}
              primary={
                <Typography variant="h6" style={{ textAlign: 'center' }}>
                  오이
                </Typography>
              }
            />
          ))}

          <ListItem alignItems="flex-start">
            <ListItemText
              style={{ flex: 1 }}
              primary={
                <Typography variant="body1" className={styled.item_list}>
                  {el.theater}
                </Typography>
              }
            />
            <Divider orientation="vertical" variant="fullWidth" flexItem />
            <ListItemText
              style={{ flex: 4 }}
              primary={
                <Typography variant="body1" className={styled.item_list}>
                  {el.title}
                </Typography>
              }
            />
            <Divider orientation="vertical" variant="fullWidth" flexItem />
            <ListItemText
              style={{ flex: 1 }}
              primary={
                <Typography variant="body1" className={styled.item_list}>
                  {el.area}
                </Typography>
              }
            />
            <Divider orientation="vertical" variant="fullWidth" flexItem />
            <ListItemText
              style={{ flex: 1 }}
              primary={
                <Typography variant="body1" className={styled.item_list}>
                  {el.date}
                </Typography>
              }
            />
          </ListItem>
        </Paper>;
      })}
    </>
  );
};

export default NoticeListText;
