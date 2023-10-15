import axios from "axios";

const handleImageSubmit = async (image, setPrediction) => {
    if (!image) {
        alert("Выберите изображение перед отправкой.");
        return;
    }

    try {
        const formData = new FormData();
        formData.append("file", image);

        const response = await axios.post(
            "http://127.0.0.1:8080/predict",
            formData
        );

        // Обработка ответа от сервера
        if (response.data) {
            const predictionText = response.data
                .map((item) => `${item.predicted_class}`)
                .join("\n");
            setPrediction(predictionText);
        } else {
            // Если сервер не отправил данные
            alert("Сервер не вернул данные.");
        }
    } catch (error) {
        console.error("Ошибка при отправке изображения:", error);
    }
};

export default handleImageSubmit