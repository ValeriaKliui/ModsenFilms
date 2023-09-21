import { Footer } from '../components/Footer/index';
import { Header } from '../components/Header';
import { Sort } from '../components/Sort/index';
import { Button } from '../components/Button/index';
import { Films } from '../components/Films';
import { useShowingFilms } from '../utils/FilmsApi/hooks';
export const Main: React.FC = () => {
    const { showMoreFilms } = useShowingFilms();
    return (
        <>
            <Header />
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
