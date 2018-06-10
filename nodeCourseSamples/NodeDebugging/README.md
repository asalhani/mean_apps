#### Methode #1:
To debug in chrome dev tool: <br/>

1. run ```node --inspect-brk app.js``` 
2. go to ```chrome://inspect ``` 

----------------------------------

#### Methode #2: <br/>
Using VS Code debugging <br/>

1. Create new debug profile (Node : Lunch a program)
2. hit F5 
3. Update lunch.json file as following: 
```
{
    "type": "node",
    "request": "launch",
    "name": "Launch Node.JS Program",
    "program": "${file}",
    "cwd": "${workspaceRoot}"
}

```
----------------------------------

#### Methode #3: Debug Node.js when running on nodemon <br/>

1. Add new debug profile to lunch.json (Node: Attach to process) profile: 
```
 {
    "type": "node",
    "request": "attach",
    "name": "Attach to Process",
    "port": 9229,
    "restart": true
}
```

2. Install nodemon ``` npm install -g nodemon ``` 
3. Run app in nodemon: ``` nodemon --inspect-brk app.js ``` 
4. Attach VS code to the process: F5 --> Choose "Attach to process" profile 

