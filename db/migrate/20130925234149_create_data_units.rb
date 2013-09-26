class CreateDataUnits < ActiveRecord::Migration
  def change
    create_table :data_units do |t|
      t.string :state
      t.string :category
      t.integer :data_num
      t.integer :age
      t.string :race
      t.string :scope

      t.timestamps
    end
  end
end
