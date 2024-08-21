import DogContext from '../context/DogContext';
import { useContext } from 'react';
import { Box } from '@mui/material';

const Dog = () => {
  const { dog } = useContext(DogContext);

  return (
    <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
      <img src={dog.message} alt="Random Dog" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
    </Box>
  );
};

export default Dog;
