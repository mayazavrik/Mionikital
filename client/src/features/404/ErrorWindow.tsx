import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

function ErrorWindow(): JSX.Element {
  const isLoading = false;

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h3">404</Typography>
      <iframe src="https://giphy.com/embed/VNWOHWQ60cE3X5B4Ch" width="480" height="476" />
      <Typography variant="subtitle1">Страница не найдена</Typography>
    </Box>
  );
}

export default ErrorWindow;
