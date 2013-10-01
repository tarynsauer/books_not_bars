class OrganizationsController < ApplicationController
  layout 'action_toolkit'

  def index
  end

  def rerender
  	render :index
  end

end