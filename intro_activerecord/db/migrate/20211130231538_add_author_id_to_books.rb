class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_id, :integer
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
