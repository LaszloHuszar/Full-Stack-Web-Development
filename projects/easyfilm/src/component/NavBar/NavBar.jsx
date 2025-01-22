import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import {Menu, AccountCircle, Brightness4, Brightness7} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useStyles from './navstyles';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 600px)');
    const theme = useTheme();
    const isAuthenticated = true;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton
                        color='inherit'
                        edge='start'
                        style={{outline: 'none'}}
                        onClick={()=>setMobileOpen((prevMobileOpen) =>
                            !prevMobileOpen)}
                        className={classes.menuButton}
                        >
                            <Menu/>
                        </IconButton>
                    )}
                    <IconButton color='inherit' sx={{ml:1}} onClick={()=>{}}>
                        {theme.palette.mode === 'dark'  ? <Brightness7/>:<Brightness4/>}
                    </IconButton>
                        {!isMobile && 'Search..'}
                    <div>
                        {!isAuthenticated?(
                            <Button color='inherit' onClick={()=>{}}>
                                Login &nbsp; <AccountCircle/>
                            </Button>
                        ):(
                            <Button
                                color='inherit'
                                component={Link}
                                to={`/profile/:id`}
                                className={classes.linkButton}
                                onClick={()=>{}}
                            >
                                 {!isMobile && <> My Movies &nbsp; </>}
                                <Avatar
                                    style={{width: 30, height: 30}}
                                    alt='Profile Image'
                                    src='https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I='
                                />
                            </Button>
                        )}
                    </div>
                    
                </Toolbar>
            </AppBar>

        <div>
            <nav className={classes.drawer}>
                {isMobile? (
                    <Drawer
                        variant='temporary'
                        anchor='right'
                        open={mobileOpen}
                        onClose={()=>setMobileOpen((prevMobileOpen) =>
                        !prevMobileOpen)}
                        classes={{paper: classes.drawerPaper}}
                        ModalProps={{keepMounted: true}}
                    >
                        <Sidebar setMobileOpen={setMobileOpen}/>
                    </Drawer>
                ):(
                    <Drawer
                        classes={{paper: classes.drawerPaper}}
                        variant='permanent'
                        open
                    >
                        <Sidebar setMobileOpen={setMobileOpen}/>
                    </Drawer>
                )}
            </nav>
        </div>

        </>
    );
};

export default NavBar;