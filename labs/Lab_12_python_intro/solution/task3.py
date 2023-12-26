def main(line):
    mx = 0
    slovar = {}
    for item in line:
        if item == ' ':
            continue
        if item in slovar:
            slovar[item] += 1
            mx = max(mx, slovar[item])
        else:
            slovar[item] = 1

    ch = list(slovar.keys())
    ch.sort()
    i = mx
    while i > 0:
        str = ""
        for item in ch:
            if slovar[item] >= i:
                str += '#'
            else:
                str += ' '
        print(str)
        i -= 1
    for c in ch:
        print(c, end='')


if __name__=='__main__':
    line = input()
    main(line)