import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ openModal, removeItem}) {
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        setOpen(openModal);
        return () => {
            
        }
    }, [openModal])

    return (
        <Dialog open={open} onClose={() => {
            handleClose();
            removeItem(false);
        }}>

            <DialogTitle id="alert-dialog-title">{"Are you Sure?"}</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This will permanently delete
                    </DialogContentText>
            </DialogContent>

            <DialogActions>

                <Button color="secondary" onClick={() => {
                    setOpen(false);
                    removeItem(false);
                }}>
                    Disagree
                    </Button>

                <Button color="primary" autoFocus onClick={() => {
                    setOpen(false);
                    removeItem(true)
                }}>
                    Agree
                    </Button>
            </DialogActions>
        </Dialog>
    );
}