from PIL import Image
import os

INPUT_DIR = "images_raw"   # 원본 이미지 넣는 폴더
OUTPUT_DIR = "images"      # 압축된 이미지 나오는 폴더
MAX_SIZE = 500             # 가로/세로 최대 px
QUALITY = 85               # 화질 (85면 육안으로 차이 없음)

os.makedirs(OUTPUT_DIR, exist_ok=True)

files = [f for f in os.listdir(INPUT_DIR) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))]

for filename in files:
    input_path = os.path.join(INPUT_DIR, filename)
    output_filename = os.path.splitext(filename)[0] + ".jpg"
    output_path = os.path.join(OUTPUT_DIR, output_filename)

    img = Image.open(input_path).convert("RGB")
    img.thumbnail((MAX_SIZE, MAX_SIZE))
    img.save(output_path, "JPEG", quality=QUALITY, optimize=True)

    input_size = os.path.getsize(input_path) / 1024
    output_size = os.path.getsize(output_path) / 1024
    print(f"{filename} → {output_filename} | {input_size:.0f}KB → {output_size:.0f}KB")

print(f"\n완료! 총 {len(files)}개 처리됨")
