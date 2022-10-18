class RootController < ApplicationController
  def index; end

  def greeting
    render json: { greeting: Greeting.all.sample.greeting }, status: :ok
  end
end
