import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const NoticeListHeader = ({ primaryText, flexValues }) => {
  return (
    <ListItem style={{ backgroundColor: '#E4E4E4', fontWeight: 'bolder' }}>
      {flexValues.map((flex, index) => (
        <ListItemText
          key={index}
          style={{ flex }}
          primary={
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              {primaryText[index]}
            </Typography>
          }
        />
      ))}
    </ListItem>
  );
};

export default NoticeListHeader;
