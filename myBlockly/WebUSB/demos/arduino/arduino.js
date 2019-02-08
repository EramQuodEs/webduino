(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', event => {
    let connectButton = document.querySelector("#connect");
    let statusDisplay = document.querySelector('#status');
    let response = document.querySelector('#response');
    let command = document.querySelector('#command');
    let send = document.querySelector('#send');
    let port;

    function connect() {
      port.connect().then(() => {
        statusDisplay.textContent = port.device_.productName+" is connected.";
        connectButton.textContent = 'Disconnect to Arduino(USB)';

        port.onReceive = data => {
          console.log(textDecoder.decode(data));
          console.log(response.innerHTML);          
          let textDecoder = new TextDecoder();
          response.textContent = textDecoder.decode(data);
        }
        port.onReceiveError = error => {
          console.error(error);
          statusDisplay.textContent = error;
        };
      }, error => {
        statusDisplay.textContent = error;
      });
    }

    function onUpdate() {
      if (!port) {
        return;
      }

      if (command.value!="") {
        //console.log("send="+command.value);
        const Command = command.textContent + '\n';
        command.value = "";
        port.send(new TextEncoder("utf-8").encode(Command));
      }
    };

    setInterval(function(){if (command.value!="") onUpdate();}, 10);
    
    send.addEventListener('click', onUpdate);

    connectButton.addEventListener('click', function() {
      if (port) {
        port.disconnect();
        connectButton.textContent = 'Connect to Arduino(USB)';
        statusDisplay.textContent = '';
        port = null;
      } else {
        serial.requestPort().then(selectedPort => {
          port = selectedPort;
          connect();
        }).catch(error => {
          statusDisplay.textContent = error;
        });
      }
    });

    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        statusDisplay.textContent = 'No device found.';
      } else {
        statusDisplay.textContent = 'Select your device.';
        //statusDisplay.textContent = 'Connect to '+ports[0].productName;
        //port = ports[0];
        //connect();
      }
    });
  });

})();
