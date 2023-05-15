class ApplicationController < ActionController::API
    # include ActionController::RequestForgeryProtection
    # protect_from_forgery with: :null_session
    include ActionController::Cookies
    
    before_action :authenticate_user!, :configure_permitted_parameters, if: :devise_controller?

    private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:role])
    end

    def authenticity_token
        @form_token = form_authenticity_token
    end


end
