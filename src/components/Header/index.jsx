import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
     
      <BrowserRouter>
          <div>
          <AppBar position="static">
        <Toolbar>
        <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link to="/">EZ SHOP</Link>
          </Typography>
         
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>
          </div>
        </BrowserRouter>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <DialogContent>
         <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
