import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ title }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#d2b48c', color: '#3e2723' }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
