it("はじめてのmock", ()=> {
  // jest fn()
  const mockfunc =jest.fn(()=> "Hello mock");
  expect(mockfunc()).toBe("Hello mock");
});

it("mockImplementation", () =>{
  const mockfunc = jest.fn();
  mockfunc.mockImplementation(()=> "Hello mock2");
  expect(mockfunc()).toBe("Hello mock2");
})
