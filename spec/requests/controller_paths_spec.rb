require 'spec_helper'

describe "Welcome" do
  describe "GET /" do
    it "opens the root path" do
      get root_path
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

describe "Representatives" do
  describe "GET /legislators" do
    it "opens the legislators path" do
      get legislators_path
      response.status.should be(200)
    end
  end
end