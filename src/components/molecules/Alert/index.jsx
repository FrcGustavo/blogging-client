import Box from '@mui/material/Box';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const severityMap = {
  success: 'success',
  fail: 'error',
};

const Alert = ({ title, message, onClose, status }) => {
  const severity = severityMap[status] || 'info';

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
