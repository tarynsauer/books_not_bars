== README

Books Not Bars: An interactive site to explore patterns in US corrections
Live demo: http://booksNotBars.herokuapp.com

Created by:
* Lyel Resner (Git: @lresner)
* Taryn Sauer (Git: @tarynsauer)
* Nick Smit (Git:@voodoolabs)
* Josh Suich (Git: @jsuich)

== About

A final group project for Dev Bootcamp (Chicago, IL).

BooksNotBars falls out from team member Lyel Resner's experience as an educator in the Bronx, NY.  Some of his former students spent time in Juvenile Detention - at costs upwards of $200,000 per year.  Meanwhile, their schools were understaffed, lacked basic resources like textbooks and computers, and were unable to afford supplamentary or after-school programs. The same students that were incarcerated excelled in adequately-resourced learning environments.

These stark dualities are not specific to NYC - they represent a national pattern of allocating significantly more resources to incarceration than to education.

BooksNotBars is an effort to educate people about some of these jarring figures and provide them with the tools to take action.

== Technologies and Process

BooksNotBars is a front-end heavy app. This is because 1) Our group wanted to dive deeper intro front-end technologies, and 2) We rely heavily on data visualizations and interactivity to communicate our message.

The app is built with Ruby 1.9.3p374, Rails 4.0.0, HTML5 and CSS3, Jquery, and a good deal of Object-Oriented JavaScript. We utilized multiple Javascript libraries, including D3, Donuts, and Vmap. Both the Google Maps and Sunlight Labs APIs were used for our action toolkit. Heroku was used for deployment, git for editing changes, and an agile SCRUM process to ensure flexibility in product development and ongoing group communication.  Tests were written in RSpec and Jasmine, with Travis-CI.



== Deployment Instructions
### Setting up your development environment

1. Fork and then clone to your computer.  The repo is located at: https://github.com/tarynsauer/CurrentBooksBar.

2. Install all gems:
```bash
    bundle install
```

3. Setup the database:
```bash
    rake db:drop && rake db:setup
```

4. Configure API Keys
```bash
    rails generate figaro:install
```
Edit your config/application.yaml file and add the following:
* Your Google Maps API key as GOOGLE_MAPS_API_KEY: XXXXXX..
You can retrieve one at: https://developers.google.com/maps/signup
* Your Sunlight Labs API key as: SUNLIGHT_API_KEY: XXXXXXX..
You can retrieve one at: http://sunlightfoundation.com/api/








