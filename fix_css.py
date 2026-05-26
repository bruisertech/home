import re

with open('style.css', 'r') as f:
    content = f.read()

# Add text-transform: lowercase; to .massive-text
# I did have it in my previous REPLACE block! Let's check style.css to see if it's there.
