import React from "react";
import { IssuesList } from "../../components/issues-list";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

describe("components/issues-list", () => {
    const props = {
        issuesList: [],
        getIssuesInProgress: false,
        getIssuesError: undefined,
        getIssues: () => {}
    };

    it("renders correctly", () => {
        const wrapper = shallow(<IssuesList {...props} />);
        const sections = wrapper.find("section");
        // todo: mock the getIssues call
        expect(sections.length).toBe(0);
    });
});
