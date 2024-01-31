import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styled from './ticketlist.module.css';
import { useFetchMyBookingListQuery } from '../../../hooks/useBooking';
import TickListSkeleton from './TickListSkeleton';
import { useFetchUserQuery } from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';

const TicketList = () => {
  const search = useSelector(({ search: { type, date } }) => ({ type, date }));
  const { data: user } = useFetchUserQuery();
  const { data: bookingList = [], isLoading } = useFetchMyBookingListQuery({ id: user?.id, search });
  const columns = [
    { 
      field: 'id', 
      headerName: '예매번호', 
      width: 110 
    },
    { 
      field: 'poster', 
      headerName: '포스터', 
      width: 100 ,
      renderCell: ({ value }) => <img style={{ width: '100%' }} src={value} />
    },
    { 
      field: 'movie', 
      headerName: '영화 정보', 
      width: 120 
    },
    { 
      field: 'theater', 
      headerName: '극장정보', 
      width: 150 
    },
    { 
      field: 'date', 
      headerName: '관람일시', 
      width: 200 
    },
    { 
      field: 'seat', 
      headerName: '관람좌석', 
      width: 70 
    },
    { 
      field: 'money', 
      headerName: '총 결제 금액', 
      width: 100,
      renderCell: ({ value }) => <span>{Number(value).toLocaleString()}원</span>
    },
  ];

  if (isLoading) {
    return <TickListSkeleton />;
  }

  return (
    <>
      {bookingList.length ? (
        <DataGrid
          className={styled.ticket_list}
          classes={{
            columnHeaders: styled.columnHeader
          }}
          rowHeight={100}
          rows={bookingList}
          columns={columns}
          align="center"
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            }
          }}
        />
      ) : (
        <Box className={styled.empty}>예매 내역이 없습니다.</Box>
      )}
    </>
    
  )
};

export default TicketList;
