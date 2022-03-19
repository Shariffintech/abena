class ApplicationController < ActionController::API
    before_action :authenticate_user!, :configure_permitted_parameters, if: :devise_controller?

    private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:role])
    end
end
