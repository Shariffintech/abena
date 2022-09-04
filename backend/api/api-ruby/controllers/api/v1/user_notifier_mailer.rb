class Api::V1::UserNotifierMailer < ApplicationMailer

  default from: '"Email Name" <email@website.com'

  def send_signup_email(lead)
    @lead = lead
    if @lead.email
        mail(to: @lead.email, subject:"Thank you for submitting fellow educator!")
    end
  end

  def send_lead_email(name, lead)
    @lead = lead
    @name = name
    if @name.email
      mail(to: @name.email, subject:"New Beta User Entry")
    end
  end

    private
    # TO DO create a private function to see if the api key is available
    
    # def search_api_keys_areavailable
    #  @apiKey = ENV['SENDGRID_API_KEY'];
    #     if !@apiKey
    #       
    #   
    # end



end