class FallbackController < ActionController::API::Base
    def index
      render file: 'public/index.html'
    end
  end