require 'spec_helper'

describe State do

	state = State.new(:name => "Alaska", 
	:edu_per_capita => 1,
	:inc_per_capita => 2,
	:whites_in_prison_per100k => 3,
	:latinos_in_prison_per100k => 4,
	:blacks_in_prison_per100k => 5)

	it "returns a :name field" do
		state.name.should eq "Alaska"
	end

	it "returns a :edu_per_capita field" do
		state.edu_per_capita.should eq 1
	end

	it "returns a :inc_per_capita field" do
		state.inc_per_capita.should eq 2
	end

	it "returns a :whites_in_prison_per100k field" do
		state.whites_in_prison_per100k.should eq 3
	end

	it "returns a :latinos_in_prison_per100k field" do
		state.latinos_in_prison_per100k.should eq 4
	end

	it "returns a :latinos_in_prison_per100k field" do
		state.blacks_in_prison_per100k.should eq 5
	end
	
end
