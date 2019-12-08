# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

json = ActiveSupport::JSON.decode(File.read('db/sample.json'));

json = json['report'];
json = json['data'];

json.each do |a| 

	Arrival.create!(
		:arrival_day_of_week => a['arrival_day_of_week'], 
		:arrival_hour => a['arrival_hour'], 
		:arrivals => a['arrivals']
	) 

end