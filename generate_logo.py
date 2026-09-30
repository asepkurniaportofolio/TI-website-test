from PIL import Image, ImageDraw, ImageFont

W, H = 1400, 900
img = Image.new('RGBA', (W, H), (0, 0, 0, 255))
d = ImageDraw.Draw(img)

purple = (117, 62, 146)
gold = (232, 186, 101)
white = (242, 242, 242)

# emblem shield-like base
def add_polygon(points, fill=None, outline=None, width=2):
    if fill is not None:
        d.polygon(points, fill=fill)
    if outline is not None:
        d.line(points + [points[0]], fill=outline, width=width)

shield = [(260, 140), (700, 70), (1140, 140), (1220, 330), (1110, 640), (700, 760), (290, 640), (180, 330)]
for i in range(7):
    points = [(x + i, y + i) for x, y in shield]
    d.polygon(points, fill=(12, 12, 12, 255), outline=(28, 28, 28, 255))

# main wing shapes
left_wing = [(210, 170), (370, 120), (520, 245), (500, 360), (355, 325), (220, 260)]
right_wing = [(1190, 170), (1030, 120), (880, 245), (900, 360), (1045, 325), (1180, 260)]
for pts in [left_wing, right_wing]:
    d.polygon(pts, fill=purple)
    d.line(pts + [pts[0]], fill=gold, width=10)

# central white abstract strokes
left_loop = [(370, 430), (430, 300), (470, 250), (520, 215), (560, 250), (610, 350), (580, 500), (490, 610), (360, 610), (300, 500), (280, 410)]
right_loop = [(1030, 430), (970, 300), (930, 250), (880, 215), (840, 250), (790, 350), (820, 500), (910, 610), (1040, 610), (1100, 500), (1120, 410)]
for pts in [left_loop, right_loop]:
    d.line(pts, fill=white, width=18)

# lower purple leaves
left_lower = [(320, 430), (470, 370), (590, 500), (540, 640), (340, 620), (280, 530)]
right_lower = [(1080, 430), (930, 370), (810, 500), (860, 640), (1060, 620), (1120, 530)]
for pts in [left_lower, right_lower]:
    d.polygon(pts, fill=purple)
    d.line(pts + [pts[0]], fill=gold, width=8)

# central vertical shape
# white body + black cutout to create silhouette
white_body = [(610, 240), (720, 240), (720, 660), (610, 660)]
d.rounded_rectangle((610, 235, 720, 670), radius=60, fill=white)
d.rounded_rectangle((645, 330, 685, 580), radius=38, fill=(0, 0, 0, 255))

# gold accent above
for r in [30, 32]:
    d.ellipse((655 - r, 265 - r, 655 + r, 265 + r), fill=gold)

# text on the right
try:
    font_big = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 88)
except Exception:
    font_big = ImageFont.load_default()

text_x = 840
for dx, dy in [(2, 2), (0, 0)]:
    d.text((text_x + dx, 310 + dy), 'TRANSFORMASI', font=font_big, fill=(240, 240, 240, 255), anchor='la')
    d.text((text_x + dx, 410 + dy), 'INDONESIA', font=font_big, fill=(240, 240, 240, 255), anchor='la')

img.save('public/log.png')
print('saved public/log.png')
