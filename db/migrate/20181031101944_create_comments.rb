class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.belongs_to :task
      t.text :content
      t.text :file_data

      t.timestamps
    end
  end
end
