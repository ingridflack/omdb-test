import { shallow } from "enzyme";
import Loader from ".";

describe("Loader", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
