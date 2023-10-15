import { useDispatch, useSelector } from "react-redux";
import { xRay, library } from "../redux/slices/SwitcherSlice";
import { fetchImages } from "../redux/slices/ImagesLibrarySlice";
import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const dispatch = useDispatch();
    const switchState = useSelector((state) => state.switch);

    return (
        <>
            <div className={styles.navbarContainer}>
                <nav className={styles.navbar}>
                    <span className={switchState == 'x-ray' || switchState.tab ? styles.activeSpan : styles.nonActiveSpan}>
                        <Link
                            to="/"
                            className={styles.link}
                            onClick={() => dispatch(xRay())}
                        >
                            <p className={styles.NavBarText}>
                                Классифицировать снимок легких
                            </p>
                        </Link>
                    </span>
                    <span className={switchState == 'library' ? styles.activeSpan : styles.nonActiveSpan}>
                        <Link
                            to="/Library"
                            className={styles.link}
                            onClick={() => {
                                dispatch(library());
                                dispatch(fetchImages());
                            }}
                        >
                            <p className={styles.NavBarText}>Библиотека</p>
                        </Link>
                    </span>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
