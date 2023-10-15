import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "../redux/slices/ImagesLibrarySlice";
import classifyImages from "./clasifyImages";
import styles from "./Library.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Library = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images.data);
    const status = useSelector((state) => state.images.status);
    const serverUrl = "http://localhost:8080";

    useEffect(() => {
        const fetchData = async () => {
            if (status === "idle") {
                await dispatch(fetchImages());
            }
        };

        fetchData();
    }, [dispatch, status]);

    const categorizedImages = classifyImages(images);

    const settings = {
        className: "center",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Отображать по 4 изображения в слайде
        slidesToScroll: 4, // Прокручивать по 4 изображения
    };

    const mobileSettings = {
        ...settings,
        slidesToShow: 2,
        slidesToScroll: 2,
      };

    return (
        <div className={styles.libraryContainer}>
            {Object.keys(categorizedImages).map((category) => (
                <div className={styles.categoryContainer} key={category}>
                    <h2 className={styles.textOfCategory}>
                        Диагноз: {category}
                    </h2>
                    <Slider {...(window.innerWidth < 580 ? mobileSettings : settings)} className={styles.carouselSlide}>
                        {categorizedImages[category].map((item) => (
                            <div key={item} >
                                <img
                                    className={styles.imgs}
                                    src={`${serverUrl}/images-samples/${item}`}
                                    alt="изображение легких"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
};

export default Library;
