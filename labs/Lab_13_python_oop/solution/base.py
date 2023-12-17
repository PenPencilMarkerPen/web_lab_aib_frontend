from abc import ABCMeta, abstractmethod


class BaseXlsBlock(metaclass=ABCMeta):
    TITLE = "TITLE"
    def __init__(self, worksheet, row, col, some_data):
        self.worksheet = worksheet
        self.row = row
        self.col = col
        self.some_data = some_data

    @abstractmethod
    def writer_some_data(self):
        pass

    @abstractmethod
    def writer_header(self):
        pass
    