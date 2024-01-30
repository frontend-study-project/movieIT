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
    { field: 'id', headerName: '예매번호', width: 70 },
    { field: 'poster', headerName: '포스터', width: 70 },
    { field: 'movie', headerName: '영화 정보', width: 70 },
    { field: 'theater', headerName: '극장정보', width: 70 },
    { field: 'date', headerName: '관람일시', width: 70 },
    { field: 'seat', headerName: '관람좌석', width: 70 },
    { field: 'money', headerName: '총 결제 금액', width: 70 },
  ];

  if (isLoading) {
    return <TickListSkeleton />;
  }

  return (
    <>
      {bookingList.length ? (
        <DataGrid
          rows={bookingList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      ) : (
        <Box className={styled.empty}>예매 내역이 없습니다.</Box>
      )}
    </>
    
  )
};

export default TicketList;
