import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styled from './ticketlist.module.css';

const TicketList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  ];

  const rows = [];

  return (
    <>
      {
        rows.length ? (
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
          />
        ) : (
          <Box className={styled.empty}>예매 내역이 없습니다.</Box>
        )
      }
    </>
    
  )
};

export default TicketList;
