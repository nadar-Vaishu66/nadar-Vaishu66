

        // JavaScript functions

        // Display function
        function appendToDisplay(value) {
            var display = document.getElementById('display');
            display.value += value;
        }

        // Function remove last element 
        function clearLastEntry() {
            var display = document.getElementById('display');
            display.value = display.value.slice(0, -1); 
        }

        //Clear All value 
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        // This function evaluate the expression 
        function calculate() {
            var display = document.getElementById('display');
            try {
                var result = eval(display.value);
                display.value = result;
                display.innerText = display.value;  // inner text 
            } catch (error) {
                display.value = 'Error';   //This display error if any occurs
                display.innerText = display.value; // inner text
            }
        }

        // This square the value 
        function square() {
            var display = document.getElementById('display');
            var value = display.value.trim();
            if (value !== '') {
                display.value = eval(value + '*' + value);
                display.innerText = display.value; // inner text 
            }
        }

    
