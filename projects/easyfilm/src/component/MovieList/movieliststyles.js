import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme)=>({
    moviesContainer:{
        isplay: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        }
    },
     
    moviesContainer:{
        overflow: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar':{
            display: 'none'
        } 
    } 


    
}));