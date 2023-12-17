
data = input()
characters_count = {}
max_count = 1
for line in data:
    line = line.strip()
    for char in line:
        if char in characters_count:
            characters_count[char] += 1
            max_count = max(max_count, characters_count[char])
        else:
            characters_count[char] = 1
unique_chars = sorted(set(characters_count.keys()))

for i in range(max_count, 0, -1):
    line = ''
    for char in unique_chars:
        if characters_count.get(char, 0) >= i:
            line += '#'
        else:
            line += ' '
    print(line)

for char in unique_chars:
    print(char, end=' ')

