import sys

with open("/home/jules/verification/verify_cuj.py", "r") as f:
    content = f.read()

# Update script to wait 4 seconds after clicking the gift for the hack sequence to start,
# and to wait for #math-question to become visible before reading inner_text.
new_content = content.replace(
    'page.wait_for_timeout(4500)',
    'page.wait_for_timeout(4000) # Wait for expectation timer\n    page.wait_for_timeout(5500) # Wait for hack sequence to reveal question'
)

with open("/home/jules/verification/verify_cuj.py", "w") as f:
    f.write(new_content)
