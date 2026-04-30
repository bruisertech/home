import re

with open('index.html', 'r') as f:
    content = f.read()

# I see, the preloader has an SVG and the hero has another SVG!
# The preloader one is <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1692.26 1927.65">
# The hero one is <svg class="hero-logo" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1692.26 1927.65">

# I need to make the *entire* hero logo #fbf9ee. That means all paths inside <svg class="hero-logo"...> should have fill="#fbf9ee".
# And I need to add the nose and forehead dots to the hero logo!

hero_start = content.find('<svg class="hero-logo"')
if hero_start != -1:
    hero_end = content.find('</svg>', hero_start)
    hero_svg = content[hero_start:hero_end+6]

    # Change all fill="..." to fill="#fbf9ee" in hero_svg
    import re
    hero_svg_colored = re.sub(r'fill="[^"]+"', 'fill="#fbf9ee"', hero_svg)

    # Also add the dots and nose.
    nose_and_dots = """<path fill="#fbf9ee" d="M848.5,1088.3 c4.2-22.1,12.3-43.7,24.1-64.2 c22.8-39.7,56.5-73.6,98.2-98.8 c41.6-25.2,89.5-39.8,138.8-42.5 c4.6-0.3,9.2-0.4,13.8-0.3 c5.2,0.1,10.3,0.5,15.5,1.2 c49,7.1,95,26.5,135,56.4 c36.1,26.9,65.8,61.5,86.4,101.4 c13.4,26,22.2,54.1,26,83.1 c0.7,5.5,1,11,1.1,16.5 c-4.4-1.2-8.9-2.2-13.4-3.1 c-41.2-8.3-84-11.4-126.8-9 c-42.9,2.4-85.3,10.6-125.8,24.2 c-19.1,6.4-37.8,13.8-55.8,22.3 c-4.4,2.1-8.7,4.2-13,6.5 c1.7-8.3,3.9-16.5,6.5-24.6 c6.6-21,15.7-41.2,27-59.8 c15.5-25.5,35.1-48.4,57.7-67.6 c20.9-17.7,44.7-31.9,70.5-41.5 c12.9-4.8,26.3-8.4,40-10.8 c-10-3.3-20.3-5.9-30.8-7.7 c-34.9-6-71.1-6.1-106.1-0.2 c-35.3,5.9-69,18-99.7,35.8 c-31,18-58.4,41.7-80.4,70 c-18.8,24.2-33,51.5-41.7,80.7 C856.3,1067.8,851.6,1077.9,848.5,1088.3z" transform="translate(-132.74 -48.09)"/>
                    <circle fill="#fbf9ee" cx="952.5" cy="803.5" r="16.5" transform="translate(-132.74 -48.09)"/>
                    <circle fill="#fbf9ee" cx="1062.5" cy="803.5" r="16.5" transform="translate(-132.74 -48.09)"/>
                    <circle fill="#fbf9ee" cx="842.5" cy="803.5" r="16.5" transform="translate(-132.74 -48.09)"/>
                    <circle fill="#fbf9ee" cx="1172.5" cy="803.5" r="16.5" transform="translate(-132.74 -48.09)"/>
                </svg>"""

    hero_svg_final = hero_svg_colored.replace('</svg>', nose_and_dots)

    # Now write it back
    new_content = content[:hero_start] + hero_svg_final + content[hero_end+6:]
    with open('index.html', 'w') as f:
        f.write(new_content)
