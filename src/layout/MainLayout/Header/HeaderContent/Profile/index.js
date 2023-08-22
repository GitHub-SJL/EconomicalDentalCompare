import PropTypes from "prop-types";
import { useRef, useState } from "react";

// material-ui
import { Avatar, Box, ButtonBase, Stack, Typography } from "@mui/material";

// assets
import avatar1 from "assets/images/users/avatar-1.png";

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const anchorRef = useRef(null);
  const iconBackColorOpen = "grey.300";

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          borderRadius: 1,
          "&:hover": { bgcolor: "secondary.lighter" },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-haspopup="true"
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar
            alt="profile user"
            src={avatar1}
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="subtitle1">John Doe</Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default Profile;
