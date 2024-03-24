import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomPagination() {
  return (
    <Stack spacing={2} alignItems={"center"} sx={{marginTop:"40px"}}>
      <Pagination
      color='primary'
        count={6}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        sx={{"& .css-b8h5kt-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ":{color:"white"}}}
      />
    </Stack>
  );
}