import sys
from PIL import Image

def agrandir_image(input_path, output_path):
    with Image.open(input_path) as img:
        largeur, hauteur = img.size

        nouvelle_largeur, nouvelle_hauteur = largeur * 3, hauteur * 3
        nouvelle_image = Image.new('RGBA', (nouvelle_largeur, nouvelle_hauteur), color = (0,0,0,0))

        pixels = img.convert('RGBA')
        for y in range(hauteur):
            for x in range(largeur):
                rgba = pixels.getpixel((x, y))
                nouvelle_image.putpixel((3*x + 1, 3*y + 1), rgba)

        nouvelle_image.save(output_path, format="PNG")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python process_image.py [image]");
    else:
        img_name = sys.argv[1]
        new_img_name = "-3px.".join(img_name.split('.'))
        agrandir_image(img_name, new_img_name)
