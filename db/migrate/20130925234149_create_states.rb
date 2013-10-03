class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :postal_abbrev
      t.string :name
      t.integer :edu_per_capita
      t.integer :inc_per_capita
      t.integer :whites_in_prison_per100k
      t.integer :latinos_in_prison_per100k
      t.integer :blacks_in_prison_per100k

      t.float :spending_ratio
      t.timestamps
    end
  end
end
