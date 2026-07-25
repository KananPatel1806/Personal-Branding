from PIL import Image
import collections

img = Image.open('public/Sparsh Logo.png')
img = img.convert('RGBA')

colors = img.getcolors(maxcolors=1000000)

# Filter out transparent and white/black/gray to find the main brand colors
brand_colors = []
for count, color in colors:
    r, g, b, a = color
    if a < 200: continue
    # skip very white or very black or very gray
    if (r > 240 and g > 240 and b > 240): continue
    if (r < 20 and g < 20 and b < 20): continue
    if abs(r-g) < 15 and abs(g-b) < 15: continue
    
    brand_colors.append((count, (r,g,b)))

brand_colors.sort(reverse=True)
for count, color in brand_colors[:15]:
    hex_color = '#%02x%02x%02x' % color
    print(f"{hex_color} (count: {count})")
