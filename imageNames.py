import os
from flask import jsonify

def image_names(root_folder):
    try:
        # Получить список имен файлов в корневой папке
        files = os.listdir(root_folder)
        # Отправить список имен файлов как JSON
        return jsonify(files)
    except Exception as e:
        return str(e), 500