class CreateArrivals < ActiveRecord::Migration[5.2]
  def change
    create_table :arrivals do |t|
      t.integer :arrival_day_of_week, null: false
      t.integer :arrival_hour, null: false
      t.integer :arrivals, null: false

      t.timestamps
    end
  end
end
