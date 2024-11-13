//@ts-nocheck

import { Person } from "@/models/people";
import { addFavorites } from "@/redux/states/favorites";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PeopleTable = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    favoritePeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorites(filteredPeople));
    console.log(filteredPeople);
    setSelectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
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

  useEffect(() => {
    setSelectedPeople(favoritePeople);
  }, [favoritePeople]);

  return (
    <div>
      <DataGrid
        rows={statePeople}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        getRowId={(row: any) => row.id}
      />
    </div>
  );
};

export default PeopleTable;
