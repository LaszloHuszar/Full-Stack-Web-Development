import React from 'react';
import { CssBaseline }from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './component/Movies/Movies';
import Actors from './component/Actors/Actors';
import NavBar from './component/NavBar/NavBar';
import Movieinformation from './component/MovieInformation/Movieinformation';
import Profile from './component/Profile/Profile';
import useStyles from './styles';

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <BrowserRouter>
                <NavBar/>
                    <main className={classes.content}>
                        <div  className={classes.toolbar}/>
                            <Routes>
                                <Route path='/movie/:id' element={<Movieinformation/>}/>
                                <Route path='/' element={<Movies/>}/>
                                <Route path='/actors/:id' element={<Actors/>}/>
                                <Route path='/profile/:id' element={<Profile/>}/>
                            </Routes>
                    </main>
            </BrowserRouter>
        </div>
    );
};

export default App;