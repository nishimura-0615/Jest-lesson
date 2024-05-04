it("モック関数に戻り値を設定する", () =>{
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
})

it("モック関数に一度だけ返される戻り値を設定する", () =>{
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value"); // 最初の呼び出しで "Mock return value" を返す
  mockFunc.mockReturnValue(undefined); // 以降の呼び出しで undefined を返す
  expect(mockFunc()).toBe("Mock return value");
})


it("モック関数に非同期な戻り値を設定する", async() =>{
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Resolved value");
  const result = await mockFunc();
  expect(result).toBe("Resolved value");
})
