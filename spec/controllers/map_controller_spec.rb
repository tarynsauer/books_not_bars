require 'spec_helper'

describe "WelcomeController" do
  describe "post#update" do
    it "should find a state by its name string" do
    	@controller = 'welcome'
    	params = {}
    	params['state'] = "Alabama"

      	post :welcome_update, params

      	expect(state.edu_per_capita).to eq(8813)
      	response.code.should eq "204"
    end
  end
end

describe "WelcomeController" do
  describe "#update" do
    it "should find a state by its name string" do
      state = State.create(name: "Test", edu_per_capita: 10, inc_per_capita: 12)
      expect(state.edu_per_capita).to eq(10)
    end
  end
end