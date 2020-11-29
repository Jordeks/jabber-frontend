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
[] use auth to have a current_user
  [X] login
  [X] get current user
  [X] logout
  [] signup
[X] new messages uses a current_user
[] can't edit/delete a message that's not your own
  []don't show edit or delete buttons on a messages that is not the current user's
[] when loggedOut clears out redux store of messages (already redirecting to '/')
[] 'try it out now button' has an if conditional that shows the messages if logged, else shows login/signup
[] login/signup/rootPath toggle or navBar
 

[] make message form sticky bottom 
[] use React library (moments? -- no Luxon? idk) for date formatting
[] look into React Mentions so @Meks would actually link to a person (https://github.com/signavio/react-mentions)


BACKEND
[X] and conditional to message create action for if fail to save
[X] which means we need to add some validations
[X] edit a message
[X] delete a message
[] add auth
  [X] login
  [X] get current user
  [X] logout
  [] signup
[] can't edit/delete a message that's not your own
[X] change controllers and routes to /api/v1