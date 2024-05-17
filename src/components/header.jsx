import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import usePeople from '@/contexts/peopleContext';
import { useRouter } from 'next/router';
import { Person } from '@mui/icons-material';

function ResponsiveAppBar() {
  const {currentUser} = usePeople();;
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [{
    title: 'Dashboard',
    onClick: () => router.push('/'),
  }, {
    title: 'Cadastro',
    onClick: () => router.push('/cadastro'),
  }, {
    title: 'Pessoas',
    onClick: () => router.push('/pessoas'),
  }];

  const settings = [{
    title: currentUser.name,
    icon: <Person />
  }];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="https://ed.escoladnc.com.br/wp-content/webp-express/webp-images/uploads/2024/04/logo-dnc-branco.png.webp" alt="logo" height={36} style={{marginRight: "1rem"}} />
          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize='36px'/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={page.onClick}>
                  <Typography variant='h6' textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={page.onClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant='h6' textAlign="center">
                  {page.title}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={currentUser.profileImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={setting.onClick}>
                    {setting.icon}
                    <Typography ml={1}>{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
