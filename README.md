![](https://github.com/IvaneKishko/load-dispatch/blob/main/shortest-load.gif)

# Load Dispatch - Load Board (MERN APP)
A dynamic web application where users can
upload car details, making them visible to transporters. Once listed, transporters can view theseentries and directly offer their transportation services to the car owners.
**Link to project:** [Live DEMO](https://loaddispatchmvpgeo.web.app/)

## How It's Made:

**Tech used:** React, Node, Express, MongoDB

During the development of the Load Dispatch - Load Board application, I extensively utilized a combination of modern front-end and back-end technologies to deliver a seamless user experience.

For the frontend, the application was built using React (v18.2.0). I incorporated libraries such as react-router-dom for effective routing and navigation, react-select for enhanced dropdown selections, and react-transition-group for smooth animations and transitions. To ensure the app's performance and health, web-vitals was an essential addition.

On the backend side, Node.js with Express (v4.18.2) was used as the server framework. Data storage was handled using MongoDB, and I used mongoose (v7.6.1) to model the application data, ensuring data integrity with plugins like mongoose-unique-validator. To facilitate communication between the frontend and backend, axios was my go-to library, while user data security was ensured using bcryptjs for password hashing and jsonwebtoken for token-based authentication. Middleware like body-parser and cors helped in request processing, and express-validator was used for backend validation. Additionally, for file uploads, I integrated multer, and to generate unique IDs, the uuid library was incorporated.

This combination of tools and libraries was instrumental in bringing the Load Dispatch - Load Board application to life, ensuring it was robust, secure, and user-friendly.
## Planned Optimizations:
While the Load Dispatch - Load Board application already offers a robust set of features, I believe that continuous improvement is vital to meeting users' evolving needs and enhancing their overall experience. Here are some pivotal improvements and optimizations I am planning to implement in upcoming iterations:

Routing Enhancement: Based on feedback and personal observations, I've identified a few minor routing inconsistencies. To further refine user navigation, I am considering a restructuring of the routing mechanics using react-router-dom. This will ensure even smoother navigation, allowing users and transporters to transition through the app without interruptions.

Upgrading Communication Mechanism: To foster clearer communication between clients and transporters, I am aiming to introduce a more streamlined communication workflow. I envision a system where transporters can send direct requests to move a load, and clients, in turn, can seamlessly accept or decline. Acceptances would trigger real-time updates on the load's status, ensuring all parties are consistently informed.

Introducing an Interactive Chat Feature: Based on the importance of direct communication, I plan to implement an interactive chat window post the acceptance of a load-moving request. This will be positioned right under the specific load details, facilitating instant discussions between clients and transporters. It's designed to enhance the coordination between both parties, ensuring mutual understanding and efficient service delivery.

While these features are in the pipeline, they underscore my commitment to iterative development and my vision of always pushing the application's boundaries to offer even more value to its users.
