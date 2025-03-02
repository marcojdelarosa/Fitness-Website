#deliverable3

### System Description

Fitness planning can be challenging for many **User**s, leading to irregular and unproductive **Workout** sessions that hinder progress. For internet users who struggle with fitness planning, our website provides a free solution that ***centralizes*** and ***automates*** all functions of creating effective **Workout Plan**s. Our value proposition is to empower fitness newcomers by offering a comprehensive platform that ***guides*** them in setting and achieving **Goal**s, building confidence and independence along the way.

Key requirements of our system include a robust **Security** module ensuring that only authorized **User**s can ***access*** their accounts using a correct *password*. **User**s ***register*** by ?( supplying a unique *username* and *email*, and then ***log in*** to manage their personalized **Workout Plan**)?. **Personal Trainer**s are able to ***add*** other **User**s as clients, where they then can ***create*** **Workout plans** for **User**s. The integrated **Calendar** allows **User**s to ***schedule*** and ***update*** daily **Workout**s, while the **Progress Tracker** ***monitors*** completion rates and ***calculates*** streaks over various *time intervals* (such as *daily* or *weekly*). Furthermore, the **Recommendation System** ***analyzes*** past **Workout** data and ***suggests*** new routines based on specific **Workout Tag**s that ***classify*** exercises by attributes like *name*, *duration*, and *intensity*.

Beyond individual progress, the system encourages the community aspect of our website by enabling **User**s to ***connect*** with **Friends**, share achievements, and mutually ***support*** one another. **Personal Trainers** can also leverage the platform to ***monitor*** multiple **User** profiles, ensuring personalized guidance for each client. Designed for both desktop and mobile use, the system emphasizes **portability**, **usability**, and minimal downtime to provide a seamless, fitness experience.

### Model
Provide the conceptual model of your system as a UML class diagram. Represent proper cardinalities (multiplicities) for all associations. Also include the association names. 
 
Some points to consider:

Use UML adequately. Do not use graphical elements that are not part of the language. Represent compositions and aggregations when relevant.
This model is not an ER diagram (entity-relationship model), which is focused on relational database systems. However, both diagrams have similarities.
Do not overcomplicate how you represent the elements of your model (e.g., using inheritance or an association when they are not necessary). Pay attention to simplicity, maintainability, unnecessary repetition, cohesion, and coupling.
Do not represent actions that don’t need to be registered in the system.
Do not represent technical elements, such as user interface or programming language libraries in the model. At this point, we are modeling the business logic/domain of your system. During the design phase, the model will be refined to include technology-specific elements and decisions.
Do not represent "System" as a class in your model. Everything that you are modeling is part of the system.
If you feel the need to justify your decisions, you can write your rationale in this section or as UML comments in the diagram.
The model must have at least 8 classes. You can add requirements in the system description if you need more classes. 
Grading criteria (25 points): You should correctly use the UML specification. Your model should have the minimum number of classes. Your domain should be adequately modeled. The model should avoid unnecessary complexity, repetition, lack of cohesion, and coupling. The classes should be at an adequate abstraction level.
