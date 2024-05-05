// it("モック関数に非同期な戻り値を設定する", async() =>{
//   const mockFunc = jest.fn();
//   mockFunc.mockResolvedValue("Resolved value");
//   const result = await mockFunc();
//   expect(result).toBe("Resolved value");
// })


// 回答
import  axios  from "axios";
import Users from "./practice";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("ユーザーを取得できる", async () => {
    const users = [{ name:"Taro" }, {name: "Hanako"}];
    const resp = { data: users };
    mockAxios.get.mockResolvedValue(resp);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json")
  })
})
