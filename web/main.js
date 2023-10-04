// Function to update sensor values on the web page
        function updateSensorValues(data) {
            document.getElementById('temperature').textContent = data.temperature + '°C';
            document.getElementById('humidity').textContent = data.humidity + '%';
            document.getElementById('mq2').textContent = data.mq2;
            document.getElementById('mq3').textContent = data.mq3;
            document.getElementById('mq7').textContent = data.mq7;
            document.getElementById('emergency').textContent = data.emergency ? 'Yes' : 'No';

            // Update Attendance based on the data received (modify this part)
            document.getElementById('attendance').textContent = data.attendance ? 'Present' : 'Absent';
        }

        // Call the update function with initial data
        const initialData = {
            temperature: 'NA',
            humidity: 'NA',
            mq2: 'NA',
            mq3: 'NA',
            mq7: 'NA',
            emergency: 'No',
            attendance: false, // Add the initial attendance value here
        };
        updateSensorValues(initialData);

        // Periodically fetch and update sensor data
        function fetchData() {
            fetch('/data') // Update with the correct endpoint for your Arduino server
                .then(response => response.json())
                .then(data => {
                    updateSensorValues(data);
                });
        }

        // Fetch data every 5 seconds (adjust the interval as needed)
        setInterval(fetchData, 5000);