require 'spec_helper'

describe RepresentativesController do

  	describe "representatives#index" do
  		it "has a defined index method" do
	  		get :index
	  		response.code.should eq "200"
	  	end

	  	it "receives a response from Sunlight_Foundation" do
	  		params = {}
	  		params['latitude'] = "41.8892439"
	  		params['longitude'] = "-87.6372234"

	  		Sunlight_Foundation.should_receive(:response).with( params['latitude'], params['longitude']).and_return({"results" => []})
	  		
	  		get :index, params
	  	end
	end

	describe "representatives#zipcode" do
  		it "has a defined zipcode method" do
	  		get :zipcode
	  		response.code.should eq "200"
	  	end

	  	it "receives a response from Sunlight_Foundation" do
	  		params = {}
	  		params['zipcode'] = "60656"

	  		Sunlight_Foundation.should_receive(:response_by_zipcode).with( params['zipcode']).and_return({"results" => []})
	  		
	  		get :zipcode, params
	  	end
	end
end