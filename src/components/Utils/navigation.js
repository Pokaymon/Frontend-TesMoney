import { useNavigate } from 'react-router-dom';

export const useNavigationHelpers = () => {
    
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleHomeClick = () => {
        navigate('/')
    };

    const handleClientPage = () => {
        navigate('/home')
    };

    const handlePocketPage = (pocket) => {
        navigate('/home/pocket', { state: { pocket } });
    };

    return { handleLoginClick, handleRegisterClick, handleHomeClick, handleClientPage, handlePocketPage };
}