class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :name
      t.integer :edu_per_capita
      t.integer :inc_per_capita
      t.integer :whites_in_prison_per100k
      t.integer :blacks_in_prison_per100k
      t.integer :latinos_in_prison_per100k
      t.timestamps
    end
  end
  # add_index :states, :name
  # add_index :states, :edu_per_capita
  # add_index :states, :inc_per_capita
end
