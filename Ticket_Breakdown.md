# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Assumptions Made/Notes:

- There is a UI that exists that displays agents and facilities, and that the individuals at facilities have access to this UI
- There is a front end making RESTful requests to a back end for this UI
- Tickets are estimated in hour increments, where 1 hour is the minimum
- The custom ID, when present, should be used in place of, rather than in addition to, the database ID
- Tickets are done in order
  - Ticket 1 blocks Tickets 2 and 3

### Ticket 1 - Add Custom ID to Agent

#### Acceptance Criteria

- I have the ability to view the custom ID of an agent, when it is present
- I have the ability to update the custom ID of an agent

#### Subtasks

- [ ] add optional column to agents table
- [ ] add endpoint to set the optional column
- [ ] add view/update custom ID component on agent view
- [ ] include custom ID on get agents response

#### Estimates

- 10 hours of work:
  - 1 hour for optional column in agents table
  - 3 hours for endpoint to set optional column
  - 5 hours to add view/update for custom ID on agent view
  - 1 hour to include custom ID on get agents response

### Ticket 2 - Use Custom ID in Report Generation

#### Acceptance Criteria

- When generating a report, custom ID's are displayed in the agent metadata, when they are present, in place of internal database ID's

#### Subtasks

- [ ] use custom ID when present in generateReport, instead of database ID

#### Estimates

- 3 hours of work

### Ticket 3 - Use Custom ID in Facility Shifts View

#### Acceptance Criteria

- When viewing a facility's shifts, I can see custom ID's for agents, in place of the internal database ID's

#### Subtasks

- [ ] use custom ID in getShiftsByFacility, instead of database ID
- [ ] display custom ID in facility shifts view

#### Estimates

- 5 hours of work:
  - 2 hours to use custom ID in getShiftsByFacility
  - 3 hours to display custom ID in shifts view
