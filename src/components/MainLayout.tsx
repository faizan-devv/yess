// components/MainLayout.tsx
import React from 'react';
import { Box } from '@mui/material';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

export default MainLayout;