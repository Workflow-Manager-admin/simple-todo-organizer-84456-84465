#!/bin/bash
cd /home/kavia/workspace/code-generation/simple-todo-organizer-84456-84465/todo_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

