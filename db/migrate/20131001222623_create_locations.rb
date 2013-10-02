class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title
      t.string :organization_name
      t.string :address_street
      t.string :city
      t.string :state
      t.string :zipcode
      t.text :full_description
      t.text :description
      t.string :website
      t.string :twitter_handle
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
