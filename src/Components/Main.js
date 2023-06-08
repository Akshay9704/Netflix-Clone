"use client";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const handleSignIn = () => {
  window.location.href = "/Signin";
};

export default function Page() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          className="m-9"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Logo"
          width="150"
          height="50"
        />

        <div
          style={{ display: "flex", marginRight: "120px" }}
          className="gap-5"
        >
          <Button
            startIcon={<LanguageIcon />}
            className="menu my-8 py-0 px-8 pl-4"
            color="secondary"
            sx={{ Color: "white" }}
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            English
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              English
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Hindi
            </MenuItem>
          </StyledMenu>
          <div>
            <button
              onClick={handleSignIn}
              className="bg-red-700 hover:bg-red-900 text-white font-md py-1 px-4 rounded"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="ml-40 mt-20">
        <Typography variant="h2">
          Unlimited movies, TV <br /> shows and more
        </Typography>
        <Typography variant="h5" className="mt-5">
          Watch anywhere. Cancel anytime.
        </Typography>
        <button className="bg-red-700 hover:bg-red-900 text-white font-md py-4 px-6 mt-8 rounded">
          Start Your Membership
        </button>
      </div>
    </div>
  );
}
