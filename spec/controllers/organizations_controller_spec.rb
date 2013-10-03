require 'spec_helper'

# REVIEW(RCB): Better as routing specs? (See maps_controller_spec notes)
describe OrganizationsController do

  	describe "organizations#index" do
  		it "has a defined index method" do
	  		get :index
	  		response.code.should eq "200"
	  	end
	end

	describe "organizations#rerender" do
  		it "has a defined rerender method" do
	  		get :rerender
	  		response.code.should eq "200"
	  	end
	end

end
