import re

with open('style.css', 'r') as f:
    content = f.read()

# Let's check text-transform: lowercase
print("lowercase in style.css" if "text-transform: lowercase" in content else "lowercase not found")
