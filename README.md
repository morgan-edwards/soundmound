# SoundMound
SoundMound is a social platform for sharing and discovering music, inspired by SoundCloud.</br><br/>
<img src="https://github.com/morgan-edwards/morganedwards.io/blob/master/images/soundmound_low.gif" width="500">
## Architecture
SoundMound uses Ruby on Rails as its back-end framework. Objects are modeled in ActiveRecord, and data is stored in a PostgreSQL
database. Rails does not serve any of SoundMound's front-end views, instead it acts only as an API server.

SoundMound's front-end is built with React and Redux. Ajax calls are made to the Rails API, which then update the Redux
state and trigger React to render views for the user.

## Features
### User authorization
SoundMound implements a custom built authorization pattern. The BCrypt gem is used to
hash user passwords to store in the database, and later check that hash to authenticate the user.
The initial HTML file served is bootstrapped with the current user to ensure there is continuity in the session the case
of a redirect or page refresh.

### File uploads
Users can upload sound files and images. These images are stored in an AWS S3 bucket. The
Paperclip gem is used to manage the uploading and deleting of files.

### Continuous playback
A music player is fixed to the bottom of the window that allows the user uninterrupted
listening as they navigate around the site. This is achieved by routing the Web Audio API
playback information through the Redux state. All playback controls are routed to the Redux state,
making it easy for users to adjust playback from multiple interfaces.

### Search and suggestions
New users can easily search for other users with or without logging in first.
Also, through the Suggest sounds feature on the home page, users can view a list of songs
by artists they may be interested in.

### Feed
From the home page, users can see the most recent music uploaded by the people they follow.

## Next Steps
### Sync-sesh
Users will be able to sync playback with their friends, and listen to the same music
at the same exact time. The goal is to provide a platform for silent disco dance
parties and mini-radio stations.
