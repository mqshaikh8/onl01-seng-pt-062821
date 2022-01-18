class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :age, :password_digest

end
