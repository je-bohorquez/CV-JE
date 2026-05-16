import urllib.request
import re

url = 'https://je-bohorquez.github.io/Portfolio/'
html = urllib.request.urlopen(url).read().decode('utf-8')
links = re.findall(r'href=[\'"]([^\'"]+\.css)[\'"]', html)
for link in links:
    if not link.startswith('http'):
        link = url + link.lstrip('/')
    try:
        css = urllib.request.urlopen(link).read().decode('utf-8')
        print(f'--- CSS FROM {link} ---')
        colors = set(re.findall(r'#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})', css))
        rgb_colors = set(re.findall(r'rgba?\([0-9\s,.]+\)', css))
        variables = set(re.findall(r'--[\w-]+:\s*[^;]+;', css))
        print("Hex:", colors)
        print("RGB:", rgb_colors)
        print("Variables:", variables)
    except Exception as e:
        print(f"Failed {link}: {e}")
