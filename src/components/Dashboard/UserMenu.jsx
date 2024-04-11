import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
function UserMenu() {
    return (
      <Menu>
        <MenuHandler>
          <Button size="sm" variant="outlined"><UserCircleIcon  className="h-8 w-8"/></Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
        </MenuList>
      </Menu>
    );
  }

export default UserMenu;