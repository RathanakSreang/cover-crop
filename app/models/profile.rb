class Profile < ActiveRecord::Base
  mount_uploader :cover, CoverUploader
end
