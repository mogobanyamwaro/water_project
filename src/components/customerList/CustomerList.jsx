import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';

import { useState } from 'react';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'TimeStamp',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Amount of Water', width: 200 },
    {
      field: 'status',
      headerName: 'Leakages',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Cost',
      width: 160,
    },
    {
      field: 'number',
      headerName: 'Number',
      width: 150,
    },
  ];

  return (
    <div className="productListItem">
      <div className="productList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </div>
  );
}
