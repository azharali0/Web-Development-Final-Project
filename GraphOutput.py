def imageSmoother(img):
    m, n = len(img), len(img[0])
    result = [[0] * n for _ in range(m)]

    for i in range(m):
        for j in range(n):
            count = 0
            total = 0
            for r in range(max(0, i - 1), min(m, i + 2)):
                for c in range(max(0, j - 1), min(n, j + 2)):
                    total += img[r][c]
                    count += 1
            result[i][j] = total // count

    return result

# Example usage:
image = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
result_image = imageSmoother(image)
print(result_image)
