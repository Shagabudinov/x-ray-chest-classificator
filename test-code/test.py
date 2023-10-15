from flask import Flask, jsonify
import os
import random

app = Flask(__name__)

# Задайте путь к главной папке с изображениями
main_image_directory = "../images-samples"

@app.route('/get_random_images')
def get_random_images():
    # Получите список файлов из главной папки
    image_files = os.listdir(main_image_directory)

    # Выберите 10 случайных изображений
    random_images = random.sample(image_files, 10)

    return jsonify({"random_images": random_images})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
