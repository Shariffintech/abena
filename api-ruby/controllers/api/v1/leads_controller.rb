class Api::V1::LeadsController < ApplicationController

    def create 
        @lead = Lead.new(lead_params)
        if @lead.save
            @teachers = Teacher.all
            @teachers.each do |teacher|
                if venue.email
                    UserNotifierMailer.send_lead_email(teacher,@lead).devliver
                end
            end
            UserNotifierMailer.send_signup_email(@lead).deliver
            render json: @lead, status: :created, location: @lead
        else
            render json: @lead.errors, status: :unprocessable_entity
        end
    end
end