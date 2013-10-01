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
    it "opens the map path" do
      get map_path
      response.status.should be(200)
    end
  end
  describe "POST /map/update" do
    it "posts to the update map path" do
      post map_update_path
      response.status.should be(200)
    end
  end
end

describe "Representatives" do
  describe "GET /legislators" do
    it "opens the legislators path" do
      get legislators_path
      response.status.should be(200)
    end
  end
end
describe "Organizations" do
  describe "GET /organizations" do
    it "opens the organizations path" do
      get organizations_path
      response.status.should be(200)
    end
  end
end
describe "Map" do
  describe "GET /map" do
    it "opens the map path" do
      get map_path
      response.status.should be(200)
    end
  end
end
describe "Zipcode" do
  describe "GET /zipcode" do
    it "opens the organizations path" do
      get zipcode_path
      response.status.should be(200)
    end
  end
end
describe "Rerender" do
  describe "GET /rerender" do
    it "opens the rerender path" do
      get rerender_path
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