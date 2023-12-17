from PIL import Image

def agrandir_image(input_path, output_path):
    # Ouvrir l'image originale
    with Image.open(input_path) as img:
        largeur, hauteur = img.size

        # Créer une nouvelle image avec la taille ajustée
        nouvelle_largeur, nouvelle_hauteur = largeur * 3, hauteur * 3
        nouvelle_image = Image.new('RGBA', (nouvelle_largeur, nouvelle_hauteur), color = (0,0,0,0))
        vert = (0,255,0,255)

        # Copier chaque pixel de l'image originale à la nouvelle position
        pixels = img.load()
        for y in range(hauteur):
            for x in range(largeur):
                rgba = pixels[x, y]
                nouvelle_image.putpixel((3*x + 1, 3*y + 1), rgba)

        # Enregistrer la nouvelle image
        nouvelle_image.save(output_path, format = "PNG")

# Utiliser la fonction sur une image spécifique
agrandir_image('OverlayB2-2-Extended.png', 'OverlayB2-Extended.png')
