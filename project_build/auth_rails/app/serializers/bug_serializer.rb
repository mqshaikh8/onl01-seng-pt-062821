class BugSerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :priority, :created_by, :solved_by, :status, :creator, :solver

  def creator
    User.where(id: self.object.created_by)[0]
  end

  def solver
    User.where(id: self.object.solved_by)[0]
  end

end
