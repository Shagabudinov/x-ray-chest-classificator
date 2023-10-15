import torch
from PIL import Image
from torchvision import models, transforms
from flask import Flask, request, jsonify
import pydicom

num_classes = 4
classes = ['COVID', 'Lung Opacity', 'Normal', 'Viral Pneumonia']
model = models.resnet18(pretrained=False)
model.fc = torch.nn.Linear(model.fc.in_features, num_classes)
model.load_state_dict(torch.load("pretrained_model.pth", map_location=torch.device('cpu')))
model.eval()

preprocess = transforms.Compose([
    transforms.Resize((200, 200)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

def classify_image(image):
    if image.mode != "RGB":
        image = image.convert("RGB")
    
    image = preprocess(image).unsqueeze(0)
    with torch.no_grad():
        outputs = model(image)
    _, predicted_class = torch.max(outputs, 1)
    return predicted_class.item()

def predict(image_data):
    if not image_data:
        return "No files selected", 400

    predictions = []

    for file in image_data:
        allowed_extensions = {"jpg", "jpeg", "png", "dcm"}

        if not file.filename.lower().endswith(tuple(allowed_extensions)):
            return f"Invalid file format: {file.filename}", 400

        if file.filename.lower().endswith(".dcm"):
            dcm = pydicom.dcmread(file)
            image = Image.fromarray(dcm.pixel_array)
        else:
            image = Image.open(file)

        class_id = classify_image(image)

        predictions.append({"filename": file.filename, "predicted_class": classes[class_id]})

    return jsonify(predictions)
