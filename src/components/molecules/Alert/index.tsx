import Box from '@mui/material/Box';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import type { AlertColor, AlertProps as MuiAlertProps } from '@mui/material/Alert';

type AlertStatus = 'success' | 'fail' | AlertColor;

const severityMap: Record<'success' | 'fail', AlertColor> = {
  success: 'success',
  fail: 'error',
};

type AlertProps = {
  title: string;
  message: string;
  status?: AlertStatus;
  onClose?: MuiAlertProps['onClose'];
};

const Alert = ({ title, message, onClose, status }: AlertProps) => {
  const severity: AlertColor = (() => {
    if (status === 'fail') {
      return severityMap.fail;
    }
    if (status === 'success') {
      return severityMap.success;
    }
    if (status) {
      return status;
    }
    return 'info';
  })();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 70,
        right: 30,
        width: 250,
        zIndex: (theme) => theme.zIndex.snackbar,
      }}
    >
      <MuiAlert variant="filled" severity={severity} onClose={onClose}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </MuiAlert>
    </Box>
  );
};

export default Alert;
