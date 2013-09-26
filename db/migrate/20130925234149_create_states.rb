class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :name
      t.integer :education_per_capita
      t.integer :incarceration_per_capita

      t.timestamps
    end
  end
end
