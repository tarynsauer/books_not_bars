require 'spec_helper'

describe WelcomeController do
  describe "post#update" do
    it "should find a state by its name string" do

    	params = {}
    	params['state'] = "AlabamaNation"

    	roll_tide = State.new(name: "AlabamaNation", edu_per_capita: 8813)
    	
      	State.should_receive(:where).with(name: "AlabamaNation").and_return ([roll_tide])

      	xhr :post, :update, params
      		
      	response.code.should eq "200"
    end
  end

  

end