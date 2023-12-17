from typing import List

def search_median(x: List[int], count):
    medians = []
    for i in range(count):
        x[:i+1] = sorted(x[:i+1])
        if (i + 1) % 2 != 0:
            median = x[(i + 1) // 2]
        else:
            median = x[i // 2] 
        medians.append(median)

    total_sum = sum(medians)
    return total_sum

if __name__ == '__main__':
    count = int(input())
    digit = list(map(int, input().split()))[:count]
    result = search_median(digit, count)
    print(result)
