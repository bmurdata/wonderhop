# Entity Relationship Diagram

## Tables

- Users: List of users who choose to register, may link to GitHub as an option
- UserPreferences: List of saved user preferences, used to make searching easier
  - Example: budget, location, or interest can be prepopulated in the search form using a prefilled option
- SavedTrips: Each trip, serves as the parent node. Can add trip destinations or stops.
  -   Example: My trip around the world
- TripStops: Individual trip locations or stops
  -   Example: Berlin, NYC, Tokoyo, etc.

## Add the Entity Relationship Diagram

<img src="https://github.com/bmurdata/wonderhop/blob/main/images/ERD_web103.png">
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| name | text | name of the shoe model |
| ... | ... | ... |
