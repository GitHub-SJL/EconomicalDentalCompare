import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function SideBar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
        },
        marginTop: (theme) => theme.spacing(8),
        height: `calc(100% - ${(theme) => theme.spacing(8)})`,
      }}
    >
      <List sx={{ paddingTop: (theme) => theme.spacing(8) }}>
        <ListItem>
          <ListItemText primary="지역" />
        </ListItem>
        <ListItem>
          <ListItemText primary="의료기관 규모" />
        </ListItem>
      </List>
    </Drawer>
  );
}
