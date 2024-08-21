import DogContainer from "./components/DogContainer";
import Header from "./components/Header";
import { CssBaseline, Container } from '@mui/material';

function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" sx={{ backgroundColor: '#f5f5dc', padding: '16px', borderRadius: '8px' }}>
                <Header title='Get Dog' />
                <DogContainer />
            </Container>
        </>
    );
}

export default App;
