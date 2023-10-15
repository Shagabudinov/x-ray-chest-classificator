from flask import send_from_directory
import os
import random

image_directory = 'images-dataset'  # Путь к вашей директории с изображениями

def random_image():
    # Получите список файлов из директории с изображениями
    image_files = os.listdir(image_directory)

    # Выберите случайное изображение из списка
    random_image_file = random.choice(image_files)

    # Отправьте выбранное изображение клиенту
    return send_from_directory(image_directory, random_image_file)