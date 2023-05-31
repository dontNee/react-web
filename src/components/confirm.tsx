import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialog({ open = false, setOpen, restartGame, message }: any) {
    // 打开
    const handleClickOpen = () => {
        setOpen(true);
    };
    // 关闭
    const handleClose = () => {
        setOpen(false);
    };
    // 重新开始
    function restart() {
        // 关闭对话框
        handleClose();
        // 重新开始
        restartGame();
    }

    // 标题
    const title = "恭喜";

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={restart}>重新开始</Button>
                <Button onClick={handleClose}>保留结果</Button>
            </DialogActions>
        </Dialog>
    );
}