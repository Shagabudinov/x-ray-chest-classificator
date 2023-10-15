from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from clasifyImage import predict
from randomImage import random_image
from imageNames import image_names
import os

app = Flask(__name__)
CORS(app) 

image_directory = "./images-samples"

@app.route("/predict", methods=["POST"])
def make_prediction():
    # Получаем данные изображения из POST-запроса
    image_data = request.files.getlist("file")

    # Передаем данные в функцию predict и возвращаем результат
    return predict(image_data)

@app.route('/get_image_names', methods=['GET'])
def get_image_names():
    return(image_names(root_folder = './images-samples'))

@app.route('/images-samples/<image_name>')
def get_image(image_name):
    return send_from_directory(image_directory, image_name)


@app.route('/get_all_images', methods=['GET'])
def get_all_images():
    image_names = get_image_names(root_folder=image_directory)
    return jsonify(image_names)

# Функция для получения списка названий изображений
def get_image_names(root_folder):
    image_names = []
    for filename in os.listdir(root_folder):
        if filename.endswith(".png"):  # Фильтруем только .png файлы (или другие форматы, если необходимо)
            image_names.append(filename)
    return image_names


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
