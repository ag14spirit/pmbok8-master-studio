import re, glob

# Let's inspect pages 115-220 where domains and processes are defined
files = sorted(glob.glob('extracted_text/page_*.txt'))

processes_found = []
for p in range(115, 220):
    with open(f'extracted_text/page_{p:03d}.txt') as f:
        text = f.read()
        # Look for process definitions
        matches = re.findall(r'•\s+([A-Z][a-zA-Z\s,]+)\.\s+The process of', text)
        if matches:
            for m in matches:
                processes_found.append((p, m.strip()))

print(f"Found {len(processes_found)} process definitions:")
for p, name in processes_found:
    print(f"Page {p}: {name}")
