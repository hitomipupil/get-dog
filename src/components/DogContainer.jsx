import { useEffect, useState } from 'react';
import getDog from '../apis/getDog';
import Dog from './Dog';
import DogContext from '../context/DogContext';
import { Button, CircularProgress, Alert, Box } from '@mui/material';

const DogContainer = () => {
  const [dog, setDog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const data = await getDog();
        setDog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDog();
  }, [count]);

  const clickHandler = () => {
    setLoading(true);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <DogContext.Provider value={{ dog: dog }}>
      <Box sx={{ textAlign: 'center', margin: '16px 0' }}>
        <Button 
          variant="contained" 
          onClick={clickHandler} 
          sx={{ backgroundColor: '#d2b48c', color: '#3e2723', '&:hover': { backgroundColor: '#c19a6b' } }}
        >
          Get a new dog
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {dog && <Dog />}
    </DogContext.Provider>
  );
};

export default DogContainer;
