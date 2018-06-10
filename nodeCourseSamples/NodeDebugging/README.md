Methode #1:
To debug in chrome dev tool:

01: run ```node --inspect-brk app.js```
02: go to ```chrome://inspect ```

----------------------------------

Methode #2:
Using VS Code debugging

01- Create new debug profile (Node : Lunch a program)
02- hit F5
03- Update lunch.json file as following:
```
{
    "type": "node",
    "request": "launch",
    "name": "Launch Node.JS Program",
    "program": "${file}",
    "cwd": "${workspaceRoot}"
}

```

-----------------------------------

Methode #3: Debug Node.js when running on nodemon

01- Add new debug profile to lunch.json (Node: Attach to process) profile:
```
 {
    "type": "node",
    "request": "attach",
    "name": "Attach to Process",
    "port": 9229,
    "restart": true
}
```

02- Install nodemon ``` npm install -g nodemon ```
03- Run app in nodemon: ``` nodemon --inspect-brk app.js ```
04- Attach VS code to the process: F5 --> Choose "Attach to process" profile

