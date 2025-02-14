def quantity(N, M):
    board = [[0] * M for _ in range(N)]
    board[0][0] = 1
    for i in range(N):
        for j in range(M):
            board[i][j] += board[i - 2][j - 1] if i - 2 >= 0 and j - 1 >= 0 else 0
            board[i][j] += board[i - 1][j - 2] if i - 1 >= 0 and j - 2 >= 0 else 0
    return board[N - 1][M - 1]
if __name__ == '__main__':
    N, M = map(int, input().split())
    print(quantity(N, M))