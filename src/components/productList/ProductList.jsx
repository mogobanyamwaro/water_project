import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import SearchAppBar from './SearchFilter'
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import './productList.css';



const columns = [
  { field: 'id', headerName: 'ID', flex: 1, hide:true },
  { field: 'Device_ID', 
  headerName: 'Device ID', 
  flex: 1, },
  {
    field: 'Total_Ksh',
    headerName: 'Total Ksh',
    flex: 1,
    editable: true,
  },
  {
    field: 'Total_Litres',
    headerName: 'Total Litres',
    flex: 1,
    editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    flex: 1,
    editable: true,
  },
];

const rows = [
  { id: 1, Device_ID: 15443, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'On' },
  { id: 2, Device_ID: 23234, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'On'},
  { id: 3, Device_ID: 32445, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'Off' },
  { id: 4, Device_ID: 43234, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'Leaking' },
  { id: 5, Device_ID: 52224, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'Out of Service' },
  { id: 6, Device_ID: 64673, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'On' },
  { id: 7, Device_ID: 72355, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'Out of Service' },
  { id: 8, Device_ID: 82456, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'Leaking' },
  { id: 9, Device_ID: 92334, Total_Ksh: 'Ksh 15443', Total_Litres: '1000', Status: 'OFf' },
];

export default function DataTable() {
  return (
    
    <div className="dataTable">
      
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
