import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../store/slice/alert';
import { reset } from '../../../store/slice/book';
import { useNavigate } from 'react-router-dom';

export default function Alert() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {open, title, content, btnList, isBookCompleted} = useSelector(state => state.alert);
  
  const handleClose = () => {
    dispatch(setAlert({
      open: false,
      title: '',
      content: '',
      btnList: [],
      isBookCompleted: false
    }))
  };


  const handleClickBtn = () => {
    
    if (isBookCompleted) {
      console.log('dsfkajlsdfaf');
      navigate('/mypage/booking');
      dispatch(reset())
    }

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
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>}
        <DialogActions>
          {
            btnList.map((ele, idx) => <Button key={idx} onClick={handleClickBtn} autoFocus={ele.autoFocus}>{ele.txt}</Button>)
          }
        </DialogActions>
      </Dialog>
  );
}