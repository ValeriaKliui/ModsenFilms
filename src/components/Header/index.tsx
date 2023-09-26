import logoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo } from './styled';
import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';
import { Button } from '../Button';

export const Header: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <StyledHeader>
            <Logo>
                <img src={logoPic} alt="ModsenFilms" />
                <h1>ModsenFilms</h1>
            </Logo>
            <Button
                text="change theme"
                onClick={() => {
                    dispatch(toggleTheme());
                }}
            />
        </StyledHeader>
    );
};
