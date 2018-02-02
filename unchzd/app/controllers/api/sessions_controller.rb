class Api::SessionsController < ApplicationController
  def create
    p params
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    p @user
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout

    else
      render json: ["No current user"], status: 404
    end
  end

end
