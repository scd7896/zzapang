import * as React from "react";
import { shallow, mount } from "enzyme";
import SearchButton from "./index";
import SearchInput from "../SearchInput";
describe("searchButton Test", function () {
  describe("button click test", function () {
    it("button click and input null", function () {
      const button = mount(<SearchButton />);
      const input = shallow(<SearchInput />);
      input.simulate("change", { currentTarget: { value: "testInput" } });
      expect(input.find("input").props().value).toBe("testInput");
      button.simulate("click", { event: { value: "aaa" } });
      setTimeout(() => {
        expect(input.find("input").props().value).toBe("");
      }, 1000);
    });
  });
});
