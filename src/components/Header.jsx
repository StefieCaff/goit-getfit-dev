import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const breakpoint = 319;

const Header = () => {
    
    return (
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                </Toolbar>  
            </AppBar>
        </Box>

    )
};

export default Header;