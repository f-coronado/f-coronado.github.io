from PIL import Image
import sys
import os

size = 300

if len(sys.argv) != 2:
    print("Usage: python resize_image.py /path/to/image.jpg")
    sys.exit(1)

image_path = sys.argv[1]
exts = [".jpg", ".jpeg", ".png"]

if not any(image_path.lower().endswith(ext) for ext in exts):
    print("Unsupported file type. Use .jpg, .jpeg, or .png")
    sys.exit(1)

try:
    img = Image.open(image_path)
    img = img.convert("RGB")

    width, height = img.size
    min_dim = min(width, height)
    left = (width - min_dim) // 2
    top = (height - min_dim) // 2
    right = (width + min_dim) // 2
    bottom = (height + min_dim) // 2

    img = img.crop((left, top, right, bottom))
    img = img.resize((size, size), Image.LANCZOS)
    img.save(image_path)

    print(f"✔ Resized and saved to {image_path}")
except Exception as e:
    print("❌ Error processing image:", e)
