import Login from '@pages/Auth/Login';
import { shallow } from 'enzyme';
describe("Login", () =>
{
  it("should render my component", () =>
  {
    const wrapper = shallow(<Login />);
    console.log(wrapper)
  });
});
