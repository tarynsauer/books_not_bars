class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :name
      t.integer :edu_per_capita
      t.integer :inc_per_capita

      t.timestamps
    end
  end
end
