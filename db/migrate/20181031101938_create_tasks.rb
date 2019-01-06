class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.belongs_to :project

      t.string     :name
      t.datetime   :deadline
      t.boolean    :done, default: false

      t.integer    :comments_counter
      t.integer    :position

      t.timestamps
    end
  end
end
