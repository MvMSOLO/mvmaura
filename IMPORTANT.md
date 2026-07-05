# Code Attribution Rules

To maintain transparency and track changes across different AI agents and developers, the following comment-based attribution system must be followed for every file in this repository.

## Rules

1.  **Initial Creation**:
    When an agent or developer creates a file, they must add the following comment at the very top:
    `[AGENT NAME] TOMONIDAN KODLANDI`

2.  **Modifications/Updates**:
    When an agent or developer modifies an existing file, they must add a new line below the previous attribution:
    `[AGENT NAME] ORQALI YANGILANDI`

3.  **Multiple Updates & Sequential Tracking**:
    - If a different agent updates the file, they should prefix their line with a number (starting from `#2`) if it's the second update or later.
    - Example sequence:
      ```
      // LOVABLE TOMONIDAN KODLANDI
      // JULES ORQALI YANGILANDI
      // #2 GOOGLE ORQALI YANGILANDI
      // #3 ANOTHER_AGENT ORQALI YANGILANDI
      ```
    - If the **same** agent updates the file multiple times consecutively, they do **not** need to add a new line each time. One line for that agent is sufficient.
    - If an agent returns to a file after another agent has modified it, they should add a new line with the next sequence number.

## Comment Styles per File Type

-   **TypeScript / JavaScript / TSX / JSX / CSS**: Use `//` or `/* ... */`
-   **Markdown / HTML**: Use `<!-- ... -->`
-   **JSON**: Attribution is not mandatory for JSON if it breaks the format, but can be added as a `_comment` key if necessary.

## Purpose
This system ensures that every participant (Jules, Lovable, Google, etc.) can see the history of who has worked on a specific module directly within the source code.
