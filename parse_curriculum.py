import os, re, json

# Read Table of Contents from extracted_text/page_012.txt to 023.txt
toc_text = ""
for p in range(12, 18):
    with open(f"extracted_text/page_{p:03d}.txt", "r", encoding="utf-8") as f:
        toc_text += f.read() + "\n"

print("TOC length:", len(toc_text))
