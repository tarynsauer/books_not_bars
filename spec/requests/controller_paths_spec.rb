require 'spec_helper'

describe "Welcome" do
  describe "GET /" do
    it "opens the root path" do
      get welcome_path
      response.status.should be(200)
    end
  end
  describe "POST /update" do
    it "opens the update path" do
      post update_path
      response.status.should be(200)
    end
  end
end

describe "Map" do
  describe "GET /map" do
    it "opens the root path" do
      get map_path
      response.status.should be(200)
    end
  end
  describe "POST /map/update" do
    it "posts to the root path" do
      post map_update_path
      response.status.should be(200)
    end
  end
end

describe "Representatives" do
  describe "GET /legislators" do
  	# => v-- STOPPED WORK HERE --v
    it "opens the root path" do
      get welcome_path
      response.status.should be(200)
    end
  end
end
describe "Welcome" do
  describe "GET /" do
    it "opens the root path" do
      get welcome_path
      response.status.should be(200)
    end
  end
end

# legislators GET  /legislators(.:format)   	representatives#index
# zipcode GET  /zipcode(.:format)       		representatives#zipcode

# organizations GET  /organizations(.:format) 	organizations#index
# rerender GET  /rerender(.:format)      		organizations#rerender

# root GET  /                        			welcome#index
# update POST /update(.:format)        			welcome#update
# map GET  /map(.:format)           			map#index
# map_update POST /map/update(.:format)    		map#update