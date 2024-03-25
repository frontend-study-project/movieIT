import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../store/slice/alert';

export default function Alert() {
  const dispatch = useDispatch();
  const {open, title, content, btnList} = useSelector(state => state.alert);
  
  const handleClose = () => {
    dispatch(setAlert({
      open: false,
      title: '',
      content: '',
      btnList: [],
    }))
  };

  const handleClickBtn = (idx) => {
    btnList[idx].clickFn()
    handleClose();
  }

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        {content && <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{whiteSpace: 'pre-line'}}>
            {content}
          </DialogContentText>
        </DialogContent>}
        <DialogActions>
          {
            btnList.map((ele, idx) => <Button key={idx} onClick={() => handleClickBtn(idx)} autoFocus={ele.autoFocus}>{ele.txt}</Button>)
          }
        </DialogActions>
      </Dialog>
  );
}