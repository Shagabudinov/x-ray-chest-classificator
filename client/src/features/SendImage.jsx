import { useState, useRef } from "react";
import handleImageSubmit from "../async/sendImageToServer";
import styles from "./SendImage.module.css";
import cross from "../icons/cross.svg"

const SendImage = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(["..."]);
    const [imageUrl, setImageUrl] = useState(null);
    const modal = useRef();
    const modalBox = useRef();

    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);

        const imageUrl = URL.createObjectURL(selectedImage);
        setImageUrl(imageUrl);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Загрузите изображение для классификации снимка легких
            </h2>
            <p className={styles.tip}>
                *Нейросеть умеет классифицировать только 4 диагноза, которые
                можно найти в библиотеке. Если предоставить ей снимок не легких,
                то может неожиданно оказаться, что у вашего носка COVID-19 :)
            </p>
            <label className={styles.inputLabel} placeholder="">
                {imageUrl ? (
                    <img
                        className={styles.uploadedImg}
                        src={imageUrl}
                        alt="Загруженное изображение"
                    />
                ) : (
                    <>
                        <span className={styles.spanLabelHorisontal}></span>
                        <span className={styles.spanLabelVert}></span>
                    </>
                )}
                <input
                    className={styles.input}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </label>
            <button
                className={styles.buttonSendImg}
                onClick={() => {
                    handleImageSubmit(image, setPrediction);
                    modal.current.classList.add(styles.modalOpen);
                }}
            >
                <p className={styles.buttonSendImage}>Отправить изображение</p>
            </button>
            <div ref={modal} className={styles.modal}>
                <div ref={modalBox} className={styles.modalBox}>
                    <button
                        className={styles.exit}
                        onClick={() => {
                            modal.current.classList.remove(styles.modalOpen);
                        }}
                    >
                        <img className={styles.exitIcon} src={cross} alt="123"/>
                    </button>
                    <p className={styles.diagnosisTitle}>Предварительный диагноз</p>
                    <p className={styles.diagnosisName}>{prediction}</p>
                </div>
            </div>
        </div>
    );
};

export default SendImage;
