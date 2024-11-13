//@ts-nocheck
import { Person } from "@/models/people";
import { removeFavorite } from "@/redux/states/favorites";
import { AppStore } from "@/redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

const FavoriteTable = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const dispatch = useDispatch();

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
              <DeleteIcon />
            </IconButton>
          }
        </>
      )
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <div>
      <DataGrid
        rows={stateFavorites}
        columns={columns}
        disableColumnSelector
        disableSelectionOnClick
        getRowId={(row: any) => row.id}
      />
    </div>
  );
};

export default FavoriteTable;
