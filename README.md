# COALMINERS
# Coal Miner Sensor Monitoring System

## Overview
This repository contains the source code and documentation for a Coal Miner Sensor Monitoring System. The system is designed to monitor various environmental parameters in coal mines using sensors such as MQ2, MQ3, MQ7, and DHT22. The collected data is then transmitted to an ESP32 microcontroller, which hosts a local web page for real-time data visualization. Additionally, the data is sent to ThingSpeak Cloud for remote monitoring and analysis. 

## Key Features
- Utilizes MQ2, MQ3, MQ7, and DHT22 sensors to measure environmental parameters.
- ESP32 microcontroller is used to collect sensor data.
- Real-time data visualization through a locally hosted web page created with HTML, CSS, and JavaScript.
- Data transmission to ThingSpeak Cloud for remote monitoring and analysis.
- Wireless monitoring through ESP8266, connected to the same server, enabling data visualization on gloves-mounted LCD screens.

## Project Components
- **Hardware:** The system incorporates MQ2, MQ3, MQ7, and DHT22 sensors, an ESP32 microcontroller, and an ESP8266 module for wireless monitoring.
- **Web Interface:** A user-friendly web page provides real-time data visualization on a local server.
- **ThingSpeak Integration:** Data is sent to ThingSpeak Cloud, allowing for remote monitoring and analysis.
- **Wireless Monitoring:** ESP8266 provides wireless monitoring and displays data on gloves-mounted LCD screens.

## Repository Structure
- `/src`: Contains the source code for the ESP32 and ESP8266 microcontrollers.(To be Include in Future as it is kept Confiential for Publishing)
- `/web`: Includes the HTML, CSS, and JavaScript files for the local web page.
- `/documentation`: Detailed documentation and wiring diagrams for setting up the system.(It is also Kept Confidential ,  the reason is Same)

## Getting Started
To get started with this project, please refer to the documentation provided in the `/documentation` folder. It includes step-by-step instructions for hardware setup, software installation, and system configuration.

## Contributions
Contributions to this project are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the system.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
Anuj Kumar Chaudhary.

## Contact
For any inquiries or feedback, please contact anuj.kumarchaudhary038@gmail.com

Thank you for your interest in the Coal Miner Sensor Monitoring System!
