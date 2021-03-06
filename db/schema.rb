# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131002234149) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "locations", force: true do |t|
    t.string   "title"
    t.string   "organization_name"
    t.string   "address_street"
    t.string   "city"
    t.string   "state"
    t.string   "zipcode"
    t.text     "full_description"
    t.text     "description"
    t.string   "website"
    t.string   "twitter_handle"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "representatives", force: true do |t|
    t.string   "title"
    t.string   "firstname"
    t.string   "middlename"
    t.string   "lastname"
    t.string   "name_suffix"
    t.string   "nickname"
    t.string   "party"
    t.string   "state"
    t.string   "district"
    t.string   "in_office"
    t.string   "gender"
    t.string   "phone"
    t.string   "fax"
    t.string   "website"
    t.string   "webform"
    t.string   "congress_office"
    t.string   "bioguide_id"
    t.string   "votesmart_id"
    t.string   "fec_id"
    t.string   "govtrack_id"
    t.string   "crp_id"
    t.string   "twitter_id"
    t.string   "congresspedia_url"
    t.string   "youtube_url"
    t.string   "facebook_id"
    t.string   "official_rss"
    t.string   "senate_class"
    t.string   "birthdate"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "states", force: true do |t|
    t.string   "postal_abbrev"
    t.string   "name"
    t.integer  "edu_per_capita"
    t.integer  "inc_per_capita"
    t.integer  "total_spending"
    t.integer  "whites_in_prison_per100k"
    t.integer  "latinos_in_prison_per100k"
    t.integer  "blacks_in_prison_per100k"
    t.float    "spending_ratio"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
