json.array!(@profiles) do |profile|
  json.extract! profile, :id, :name, :email, :cover
  json.url profile_url(profile, format: :json)
end
