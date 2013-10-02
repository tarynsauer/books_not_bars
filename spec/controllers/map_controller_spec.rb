require 'spec_helper'

describe MapController do

  	describe "map#index" do
  		it "has a defined index method" do
	  		get :index
	  		response.code.should eq "200"
	  	end
	end

  	describe "map#update" do
	  	it "has a defined update method" do

	  		params = {}
	    	params['state'] = "Northumbria"

	  		# northU = State.new(name: "Northumbria")

	  		# State.should_receive(:where).with(name: "Northumbria").and_return (northU)

	  		xhr :post, :update, params

	  		response.code.should eq "200"
	  	end
  end

end