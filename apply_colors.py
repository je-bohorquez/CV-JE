import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replaces
    content = content.replace('[#1448a0]', 'navy')
    content = content.replace('[#f2c911]', 'gold')
    content = content.replace('[#0d3880]', 'navy') # Simplify gradient
    content = content.replace('slate-900', 'charcoal')
    content = content.replace('slate-800', 'charcoal')
    content = content.replace('slate-700', 'mgray')
    content = content.replace('slate-600', 'mgray')
    content = content.replace('slate-500', 'gray-500')
    content = content.replace('slate-400', 'gray-400')
    content = content.replace('slate-200', 'gray-200')
    content = content.replace('slate-100', 'cream')
    content = content.replace('slate-50', 'cream')
    content = content.replace('blue-900', 'navy')
    content = content.replace('blue-100', 'cream')
    content = content.replace('blue-50', 'cream')
    content = content.replace('font-black', 'font-display font-black')
    content = content.replace('font-bold', 'font-display font-bold')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

replace_in_file('index.html')
replace_in_file('script.js')
