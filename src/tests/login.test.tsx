import Login from '@pages/Authentication/Login';
import { shallow } from 'enzyme';
describe("Login", () =>
{
  it("should render my component", () =>
  {
    const wrapper = shallow(<Login />);
    console.log(wrapper)
  });
});
