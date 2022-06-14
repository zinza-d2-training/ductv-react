import { Link } from '@mui/material';

import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DataLink } from '../../types';

export const HeaderLinkDropDown = ({
  id,
  idMenu,
  text,
  dataLink
}: {
  id: string;
  idMenu: string;
  text: string;
  dataLink: DataLink;
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id={id}
        aria-controls={open ? idMenu : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        color="inherit"
        variant="text"
        onClick={handleToggle}
        sx={{
          textTransform: 'unset'
        }}
        endIcon={<KeyboardArrowDownIcon />}>
        {text}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom'
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id={idMenu}
                  aria-labelledby={id}
                  onKeyDown={handleListKeyDown}
                  sx={{
                    fontWeight: '700'
                  }}>
                  {dataLink.data?.map((item) => (
                    <MenuItem key={item.key} component="a" href={item.link}>
                      {item.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

const HeaderLink = ({ text }: { text: string }) => {
  return (
    <Link
      variant="button"
      underline="none"
      color="inherit"
      href="#"
      sx={{ my: 1, mx: 1.5, textTransform: 'unset' }}>
      {text}
    </Link>
  );
};

export default HeaderLink;
