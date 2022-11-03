require "test_helper"

class StrategiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @strategy = strategies(:one)
  end

  test "should get index" do
    get strategies_url, as: :json
    assert_response :success
  end

  test "should create strategy" do
    assert_difference('Strategy.count') do
      post strategies_url, params: { strategy: { category: @strategy.category, description: @strategy.description, name: @strategy.name, reference: @strategy.reference, tier: @strategy.tier } }, as: :json
    end

    assert_response 201
  end

  test "should show strategy" do
    get strategy_url(@strategy), as: :json
    assert_response :success
  end

  test "should update strategy" do
    patch strategy_url(@strategy), params: { strategy: { category: @strategy.category, description: @strategy.description, name: @strategy.name, reference: @strategy.reference, tier: @strategy.tier } }, as: :json
    assert_response 200
  end

  test "should destroy strategy" do
    assert_difference('Strategy.count', -1) do
      delete strategy_url(@strategy), as: :json
    end

    assert_response 204
  end
end
