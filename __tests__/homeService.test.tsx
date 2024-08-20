import TestHomeService from '../src/services/homeService/testHomeService';
import {endPoints} from '../src/services/endpoints';

describe('HomeService', () => {
  let mockRequest: jest.Mock;

  beforeEach(() => {
    mockRequest = jest.fn();
    TestHomeService.requestFunction = mockRequest; // Use mock
    jest.clearAllMocks();
  });

  test('images method should call requestFunction with correct endpoint and return data', async () => {
    // Arrange
    const mockResponse = {data: {imageList: ['image1', 'image2']}};
    mockRequest.mockResolvedValueOnce(mockResponse);

    // Act
    const result = await TestHomeService.images();

    // Assert
    expect(mockRequest).toHaveBeenCalledWith(endPoints.home.images);
    expect(result).toEqual(mockResponse.data);
  });

  test('users method should call requestFunction with correct endpoint and return data', async () => {
    // Arrange
    const mockResponse = {data: {userList: ['user1', 'user2']}};
    mockRequest.mockResolvedValueOnce(mockResponse);

    // Act
    const result = await TestHomeService.users();

    // Assert
    expect(mockRequest).toHaveBeenCalledWith(endPoints.home.users);
    expect(result).toEqual(mockResponse.data);
  });

  test('images method should handle errors', async () => {
    // Arrange
    const errorMessage = 'Error fetching images';
    mockRequest.mockRejectedValueOnce(new Error(errorMessage));

    // Act & Assert
    await expect(TestHomeService.images()).rejects.toThrow(errorMessage);
  });

  test('users method should handle errors', async () => {
    // Arrange
    const errorMessage = 'Error fetching users';
    mockRequest.mockRejectedValueOnce(new Error(errorMessage));

    // Act & Assert
    await expect(TestHomeService.users()).rejects.toThrow(errorMessage);
  });
});
