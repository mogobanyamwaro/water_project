import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './CustomerList.css';

export default function DataTable({ loading, newDetails }) {
  return (
    <div className="dataTable">
      {!loading && (
        <DataGrid
          rows={newDetails}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
    </div>
  );
}
const columns = [
  { field: 'id', headerName: 'ID', flex: 1, hide: true },
  { field: 'Phone_Number', headerName: 'Phone_Number', flex: 1 },
  {
    field: 'Paid_Ksh',
    headerName: 'Paid Ksh',
    flex: 1,
    editable: true,
  },
  {
    field: 'Amount_Litres',
    headerName: 'Litres',
    flex: 1,
    editable: true,
  },
  {
    field: 'TimeStamp',
    headerName: 'TimeStamp',
    flex: 1,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 150',
    Amount_Litres: '1000',
    TimeStamp: '11:59',
  },
  {
    id: 2,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 10',
    Amount_Litres: '20',
    TimeStamp: '11:59',
  },
  {
    id: 3,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 40',
    Amount_Litres: '80',
    TimeStamp: '13:45',
  },
  {
    id: 4,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 60',
    Amount_Litres: '90',
    TimeStamp: '13:45',
  },
  {
    id: 5,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 70',
    Amount_Litres: '85',
    TimeStamp: '16:50',
  },
  {
    id: 6,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 58',
    Amount_Litres: '66',
    TimeStamp: '16:50',
  },
  {
    id: 7,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 90',
    Amount_Litres: '56',
    TimeStamp: '11:59',
  },
  {
    id: 8,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 40',
    Amount_Litres: '50',
    TimeStamp: '11:59',
  },
  {
    id: 9,
    Phone_Number: 790566616,
    Paid_Ksh: 'Ksh 2000',
    Amount_Litres: '100',
    TimeStamp: '11:59',
  },
];
