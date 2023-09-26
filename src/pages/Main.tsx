import { Footer } from '../components/Footer/index';
import { Header } from '../components/Header';
import { Sort } from '../components/Sort/index';
import { Button } from '../components/Button/index';
import { Films } from '../components/Films';
import { useShowingFilms } from '../utils/FilmsApi/hooks/useShowingFilms';
import { displayMoreFilms, increasePage } from '../store/slices/ShowingFilmsSlice';
import { useAppDispatch } from '../store/hooks/hooks';
import { useEffect } from 'react';
import { Search } from '../components/Search';

export const Main: React.FC = () => {
    const { page, films } = useShowingFilms();

    const dispatch = useAppDispatch();
    const showMoreFilms = () => {
        dispatch(increasePage());
    };
    useEffect(() => {
        if (films.length > 0 && page !== 1) {
            dispatch(displayMoreFilms(films));
        }
    }, [films]);

    return (
        <>
            <Header />
            <Search />
            <Sort />
            <Films />
            <Button
                text="Show More"
                onClick={() => {
                    showMoreFilms();
                }}
            />
            <Footer />
        </>
    );
};
