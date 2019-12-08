class Api::ArrivalsController < ApplicationController
	def index
		@arrivals = Arrival.all
		render 'api/arrivals/index'
	end

	def create
		@arrival = Arrival.create!(arrival_params)
		render 'api/arrivals/index'
	end

	private

	def arrival_params
		params.require(:arrival).permit(:arrival_day_of_week, :arrival_hour, :arrivals)
	end

end
