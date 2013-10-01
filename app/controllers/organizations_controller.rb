class OrganizationsController < ApplicationController
  layout 'action_toolkit'

  def index
  end

  def create
  end

  def show_for_map
    markers = [
            { 'name' => 'Logan Square', 'position' => [41.912945, -87.642746], 'description' => 'test1'},
            { 'name' => 'Loop', 'position' => [41.85569, -87.626266], 'description' => 'test22222'}
    ]
    #if request.xhr?
      render json: { markers: markers }
    #end
  end

  def rerender
  end

end