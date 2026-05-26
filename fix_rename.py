import os
import glob
videos = glob.glob('/home/jules/verification/videos/*.webm')
for v in videos:
    if "video.webm" not in v:
        os.rename(v, '/home/jules/verification/videos/video.webm')
        break
