@arrivals.each do |arrival|
	json.set! arrival.id do
		json.partial! 'arrival', arrival: arrival
	end
end