import React from "react";
import { shallow } from "enzyme";
import SongCards from "./SongCards";

describe("SongCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SongCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
