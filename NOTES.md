FRONTEND
[X] import svg icons for edit and delete
[X] use svg icon in home button, delete, and edit btn 
[X] change URL in actions so that it is a CONST
[X] back button to home
[X] edit a message
[X] delete a message
[X] handle displaying errors in create action creator
[X] handle displaying errors in edit action creator
[] I'M SORRY JORDLES I BROKE YOUR BEAUTIFUL POPUP PLEASE HALP ME FIX (it no longer closes)
  -it closes if the inspect is closed...weird...
  -might want to add close on submit somehow
  -why when close #messanger in url??
[X] use auth to have a current_user
  [X] login
  [X] get current user
  [X] logout
  [X] signup
[X] new messages uses a current_user
[X] need to add a new message to the user's messages in redux store upon creation (it is succesfully updatin gin the backend cause we see it on refresh)
  [X] update edited message
  [X] update deleted message
[X] can't edit/delete a message that's not your own
  [X]don't show edit or delete buttons on a messages that is not the current user's
[X] when loggedOut clears out redux store of messages (already redirecting to '/')
[X] 'try it out now button' has an if conditional that shows the messages if logged, else shows login/signup

[] Message.js we're getting a key error, where to put it?? (Nicky at OOH)
[] if a user is NOT logged in and types /messages in the url all hell breaks loose, (46 console errors, app tries to find a current user[dumby])

[] login/signup/rootPath toggle or navBar
 

[] make message form sticky bottom 
[] use React library (moments? -- no Luxon? idk) for date formatting
[] look into React Mentions so @Meks would actually link to a person (https://github.com/signavio/react-mentions)


BACKEND
[X] and conditional to message create action for if fail to save
[X] which means we need to add some validations
[X] edit a message
[X] delete a message
[X] add auth
  [X] login
  [X] get current user
  [X] logout
  [X] signup
[] can't edit/delete a message that's not your own
[X] change controllers and routes to /api/v1