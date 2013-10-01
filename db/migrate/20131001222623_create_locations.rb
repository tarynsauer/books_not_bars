class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title
      t.string :position
      t.string :organization_name
      t.string :address
      t.string :description
      t.string :website
      t.string :twitter_handle

      t.timestamps
    end
  end
end
