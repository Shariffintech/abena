# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_21_142131) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classrooms", force: :cascade do |t|
    t.integer "room_number"
    t.string "room_name"
    t.bigint "students_id", null: false
    t.bigint "users_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["students_id"], name: "index_classrooms_on_students_id"
    t.index ["users_id"], name: "index_classrooms_on_users_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.bigint "strategies_id", null: false
    t.bigint "users_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["strategies_id"], name: "index_comments_on_strategies_id"
    t.index ["users_id"], name: "index_comments_on_users_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string "title"
    t.string "note"
    t.bigint "students_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["students_id"], name: "index_notes_on_students_id"
  end

  create_table "strategies", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "reference"
    t.integer "students_id"
    t.integer "classrooms_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "category", default: 0
    t.integer "tier", default: 0
    t.index ["classrooms_id"], name: "index_strategies_on_classrooms_id"
    t.index ["students_id"], name: "index_strategies_on_students_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "fullname"
    t.string "overall_concern"
    t.string "funding_stream"
    t.string "sleeping_patterns"
    t.string "prior_school"
    t.string "team"
    t.bigint "users_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["users_id"], name: "index_students_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "fullname"
    t.integer "role", default: 0
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "classrooms", "students", column: "students_id"
  add_foreign_key "classrooms", "users", column: "users_id"
  add_foreign_key "comments", "strategies", column: "strategies_id"
  add_foreign_key "comments", "users", column: "users_id"
  add_foreign_key "notes", "students", column: "students_id"
  add_foreign_key "strategies", "classrooms", column: "classrooms_id"
  add_foreign_key "strategies", "students", column: "students_id"
  add_foreign_key "students", "users", column: "users_id"
end
