(function() {

var deleteButtonSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKICAgIC5zdHIxIHtzdHJva2U6IzQzNDI0MjtzdHJva2Utd2lkdGg6MTB9CiAgICAuc3RyMCB7c3Ryb2tlOiM0MzQyNDI7c3Ryb2tlLXdpZHRoOjE1fQogICAgLmZpbDEge2ZpbGw6I0ZGRkZGRn0KICAgIC5maWwwIHtmaWxsOnVybCgjaWQwKX0KICAgXV0+PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgY3g9IjQ5JSIgY3k9IjQ5JSIgZng9IjQ5JSIgZnk9IjQ5JSIgaWQ9ImlkMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMGFmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA4QkZGIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkxheWVyX3gwMDIwXzEiPjxwYXRoIGNsYXNzPSJmaWwwIHN0cjAiIGQ9Ik05NCA5NGMtODUgODYtODUgMjI2IDAgMzEyIDg2IDg1IDIyNiA4NSAzMTIgMCA4NS04NiA4NS0yMjYgMC0zMTItODYtODUtMjI2LTg1LTMxMiAweiIvPjxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0zNzIgMTg4bC02MiA2MiA2MiA2MmM0IDQgNCAxMCAwIDE0bC00NiA0NmMtNCA0LTEwIDQtMTQgMGwtNjItNjItNjIgNjJjLTQgNC0xMCA0LTE0IDBsLTQ2LTQ2Yy00LTQtNC0xMCAwLTE0bDYyLTYyLTYyLTYyYy00LTQtNC0xMCAwLTE0bDQ2LTQ2YzQtNCAxMC00IDE0IDBsNjIgNjIgNjItNjJjNC00IDEwLTQgMTQgMGw0NiA0NmM0IDQgNCAxMCAwIDE0eiIvPjwvZz48L3N2Zz4=";


  var textArea = document.getElementById('text-area');
  var addButton = document.getElementById('add-note');
  var clearButton = document.getElementById('clear-note');
  var notesContainer = document.getElementById('notes-container');


  addButton.addEventListener('click', function() {
    var note = textArea.value;
    if(note) {
      appendNote(note);
    }
  });//on click append note to page
  
  clearButton.addEventListener('click', function() {
    clearNote();
  }); //clear note text area on click


  function appendNote(note) {

    /*
     Div components
      - div to hold paragraph
      - div to hold color selection buttons and a delete button
    */
      var noteDiv = document.createElement('div');
      noteDiv.setAttribute("class", "note");

    /*
      Div to hold the note text
    */ 
      var noteBody = document.createElement('div');
      noteBody.setAttribute('contenteditable', 'true');
      var notePara = document.createElement('p');

      notePara.innerText = note;
      noteBody.appendChild(notePara);
  
    /*
      Div to hold controls for the note
        - delete note
        - change background color of the note
    */ 
      var noteControls = document.createElement('div');
      noteControls.setAttribute('class', 'note-controls');

      var trashcan = document.createElement('img');
      trashcan.setAttribute('id', 'delete-button');
      trashcan.setAttribute('src', deleteButtonSVG);
      trashcan.addEventListener('click', function() {
        var parent = this.parentElement
        var parentParent = parent.parentElement
        notesContainer.removeChild(parentParent);
      })


      var colorRed = generateColorButton('red');
      var colorBlue = generateColorButton('lightblue');
      var colorOlive = generateColorButton('olive');
      var colorYellow = generateColorButton('yellow');

      var time = document.createElement('paragraph');
      time.innerText = formatTime();

      noteControls.appendChild(time);

      noteControls.appendChild(colorRed);
      noteControls.appendChild(colorBlue);
      noteControls.appendChild(colorOlive);
      noteControls.appendChild(colorYellow);

      noteControls.appendChild(trashcan);

      noteDiv.appendChild(noteBody);
      noteDiv.appendChild(noteControls);

    /*
      Appending note to DOM and clearing textarea
    */  

      notesContainer.insertBefore(noteDiv, notesContainer.firstChild);
      textArea.value = "";
  }

  function clearNote() {
    textArea.value = "";
  }

  function generateColorButton(color) {
    var colorSpan = document.createElement('span');
    var backgroundColorAttribute = "background-color" + ": " + color;  
    var fontColorAttribute = 'color' + ": " + color;
    var styleAttribues = backgroundColorAttribute + ";" + fontColorAttribute;
    colorSpan.setAttribute('style', styleAttribues);
    colorSpan.innerText = 'x';

    //Add event listener to change background color of the note  
    colorSpan.addEventListener('click', function() {
      var parent = this.parentElement;
      var parentParent = parent.parentElement;
      parentParent.setAttribute('style', backgroundColorAttribute);
    }); //this will set the background color for the whole note div

    return colorSpan;    
  }


  //format time
  function formatTime(str) {
    // var parsed = new Date(str);
    var parsed = new Date();
    var date = zeroPad(parsed.getMonth() + 1) + "/"+ zeroPad(parsed.getDate())  + "/"+  parsed.getFullYear(); 
    var time = zeroPad(parsed.getHours()) + ":" + zeroPad(parsed.getMinutes());
    return ("Created: " + date + " | " + time);
  }
  //append 0's to hours/ minutes if single digits
  function zeroPad(num) {
    while(String(num).length < 2) { num = "0" + String(num); }
    return num;
  }


})();