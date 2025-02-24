#deliverable3 - Analysis

## System Description

Provide a brief textual description of your system. 

The first paragraph of the description must contain the **problem statement**, the **product position statement**, and the **value proposition** of your system (you can refine/update what you presented in D.2). 

The following paragraphs should describe the **key requirements** of the system. This description should be consistent with **D.2 stakeholders, requirements, use cases, and user stories**. Again, refinements/updates are welcome since your understanding of the system is constantly evolving.

**Formatting guidelines:**
- Use **bold** for every noun that is a **class** in your model.
- Use *italic* for every noun that is an *attribute* in your model.
- Use ***bold and italic*** for every noun or verb that is an ***association*** in your model.

### Grading Criteria (5 points)
- The description should be **clear, concise, and well-written**, free of typos and grammar problems.
- The use of **bold, italic, and bold-italic formatting** should be **coherent with the model** presented in Section 2.
- All **classes, attributes, and associations** from the model should appear in the text, and their role in the system should be consistent with the model.

---

## Model

Provide the **conceptual model** of your system as a **UML class diagram**. Represent proper **cardinalities (multiplicities)** for all associations. Also, include **association names**.

### Points to Consider
- Use **UML adequately**. Do not use graphical elements that are not part of the language.
- Represent **compositions and aggregations** when relevant.
- This model is **not** an ER diagram (entity-relationship model), which is focused on relational database systems. However, both diagrams have similarities.
- **Avoid overcomplicating** the representation of elements (e.g., unnecessary inheritance or associations).
- Pay attention to **simplicity, maintainability, unnecessary repetition, cohesion, and coupling**.
- Do **not** represent actions that don’t need to be registered in the system.
- Do **not** include **technical elements** such as UI components or programming language libraries.
- Do **not** represent **"System"** as a class. Everything being modeled is part of the system.
- If necessary, include **rationale or justifications** in this section or as UML comments in the diagram.
- The model **must have at least 8 classes**. If necessary, update the system description to accommodate more classes.

### Grading Criteria (25 points)
- Correct usage of **UML specification**.
- The model should have the **minimum number of classes (at least 8)**.
- The domain should be **adequately modeled**.
- The model should avoid **unnecessary complexity, repetition, lack of cohesion, and coupling**.
- The classes should be at an **appropriate level of abstraction**.

---

## Format
Your document should be composed in **Markdown** and hosted on **GitHub**, but you should also submit a **PDF copy** for grading. See also: [Converting GitHub Markdown to PDF](#).

- Sections should use **appropriate Markdown syntax**.
- Figures should be included **if needed or appropriate**.

---

## Teamwork
The contribution of each team member may be different, but we expect the amount of work to be **roughly even**.

When submitting the deliverable, the **person submitting** should describe **each team member’s contributions** and provide a **rough percentage estimation** of their contribution. Example:

```
John Doe (40%) – Conducted 2 interviews, wrote section 2.3, and reviewed the whole document.
Mary Shawn (40%) – Conducted 1 interview, wrote sections 1 and 2.1, reviewed section 2.3, and worked on the source code.
Lucy Johnson (20%) – Wrote section 2.2 and performed code review.
```

We will also **review your GitHub repository**, which should reflect the **team’s collaboration**. Every team member should be **committing and making meaningful contributions**.

### **Important Notice:**
- Individual grades **may be reduced** based on the **GitHub commit history** and the deliverable summary.
- If there's **no evidence** that a team member contributed, they **should expect to receive a zero**.
