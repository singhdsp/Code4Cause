import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import GrassIcon from "@mui/icons-material/Grass";
import {
  AddRounded,
  DashboardRounded,
  ForestRounded,
  KeyboardArrowLeftRounded,
  Leaderboard,
  LeaderboardRounded,
  SettingsRounded,
} from "@mui/icons-material";
import AvatarsGLS from "../Components/AvatarGLS";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const UserAvatar = (props) => {
    return (
      <div className="h-10 w-10 rounded-full bg-white font-semibold font-Ps flex justify-center items-center tracking-wider ml-auto text-sm">
        <h1>{`${props.name.split(" ")[0][0]}${props.name.split(" ")[1][0]}`}</h1>
      </div>
    )
  }

  const drawer = (
    <div>
      <Toolbar />
      <div className="p-4 w-full flex justify-center items-center">
        {/*  <Avatar
          {...stringAvatar("Kent Dodds")}
          sx={{ height: 72, width: 72 }}
        /> */}
        <UserAvatar name=" Manit Singh" />
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="h-full w-[20rem] bg-white shadow-2xl flex flex-col py-4">
        {/* Logo header */}
        <div className=" py-8 ps-2 flex items-center">
          <div className="p-1 text-white rounded-xl">
            <img src="/plants-r.png " className="h-16 w-16" />
          </div>
          <div className="ml-2">
            <h1 className="uppercase text-3xl tracking-wider font-bold font-Ps bg-gradient-to-br from-green-600 to-blue-800 bg-clip-text text-transparent">
              Planters Go
            </h1>
          </div>
        </div>
        {/* ther Navigations */}
        <div className="px-6 py-2 space-y-4">
          <Link
            to="/Dashboard"
            className="p-2 border-2 border-green-600 rounded-xl font-bold uppercase flex space-x-6 font-Ps text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            <DashboardRounded />
            <h1>Dashboard</h1>
          </Link>
          <Link
            to="./MyPlants"
            className="p-2 border-2 border-green-600 rounded-xl font-bold uppercase flex space-x-6 font-Ps text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            <ForestRounded />
            <h1>Your Plants</h1>
          </Link>
          <Link
            to="./Rankings"
            className="p-2 border-2 border-green-600 rounded-xl font-bold uppercase flex space-x-6 font-Ps text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            <LeaderboardRounded />
            <h1>Rankings</h1>
          </Link>
        </div>
        <div className=" mt-auto px-6 py-2">
          <Link
            to="./Settings"
            className="p-2 border-2 border-green-600 rounded-xl font-bold uppercase flex space-x-6 font-Ps text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            <SettingsRounded />
            <h1>Settings</h1>
          </Link>
        </div>
      </div>
      {/* Main Div */}
      <div className="h-full flex-1 bg-gray-100">
        <div className="w-full py-2 px-4 bg-green-600 flex items-center">
          <h1 className="font-bold font-ps text-white text-xl">Dashboard</h1>
          <UserAvatar name="Manit Singh" />
        </div>
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
