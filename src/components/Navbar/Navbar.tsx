import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog, dialogOpenSubject$ } from "../CustomDialog";
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Navbar() {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Favorites People Table
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
