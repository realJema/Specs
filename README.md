# Jarvis 
J.A.R.V.I.S. (Just A Rather Very Intelligent System)
A software assitant to help me automate tasks

## Installation 
### Run the frontend
install dependencies  
`
npm install
`  
start up program  
`
npm start 
`

### Run the backend api 
install requirements  
`
pip install -r requirements.txt
`
```
cd backend
python server.py   
```

## Frontend 
**React + Electron**. 

## Backend 
Python Flask Api
#### Structure
`Server.py`
Api file which communicates with the frontend. It receives the input from the user and passes it to the python script which is in charge of executing it, then returns the string results to the frontend

`main.py`
This is the main deciding script of the backend. It identifies the instruction and decides on which script to call to execute it. This identification is based on the instructions in the `command_list.py` file by matching in which category the instruction falls in.

`scripts/command_list.py`
contains all the instructions that can be processed categorized according to the scripts which execute them.

`scripts/media_commands`
`scripts/sys_commands`

## Philosophy 
This app is built to run on every computer systems as much as possible.

## Commands 
### Chats 
```
'hi'                    --> 'hello',
'hello'                 --> 'hi',
'hey'                   --> 'Yes sir! am listening',
'how are you'           --> 'I am fine, thank you!',
'what is your name'     -->: 'My name is JARVIS, meaning Just A Rather Very Intelligent System. My goal is to assist you in your daily tasks',
'how old are you'       --> 'I am, less than one month old',
'goodmorning'           --> 'Goodmoring Sir!, how are you doing today?',
'am good'               --> 'That\'s good to hear!',
'am good'               --> 'That\'s good to hear!',
'am good'               --> 'That\'s good to hear!',
```

### System commands 
say this: 
    .. shutdown ...
    .. restart ...
    .. hibernate ...
    .. cancel ...
    .. logoff ...
    .. cancel shutdown ...
advanced command (this adds a delay to the above commands)
    .. [say this] in [x] minutes 

## File Stucture
```
-- public/
    --favicon
-- src/
    -- backend/
        -- server.js
        -- main.py
        -- scripts/
    -- images/
    -- App.js
    -- App.css
    -- index.js
    -- index.css
    -- instruction.js
```
## To-Do
[x] update UI
[x] reset input to placeholder 
[x] ui design for assistant 
[] importing local scripts 
[] close, open animations
[] updating commands backend
[] image of jarvis 
[] speech recognition and reporting 
[] Animations  
[] Move to edge of screen
[] loading animation 
[] Backend instructions standardization  
[] Backend documentation  
[] Add website launching   
[] Add calculator   
[] 
