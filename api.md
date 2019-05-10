<h1 align="center"> Sahtel++ API endpoints</h1>


This project is the web client for Sahtel++. Connects to the [Sahtel++ API](https://github.com/Swackles/sahtelPlusPlsus-API)

## Getting Started

This contains information about all API endpoints of [Sahtel++ API](https://github.com/Swackles/sahtelPlusPlsus-API) project

### GET /tunniplaan

Returns the basic schedule as an array containing objects like this:
```json  
{  
	"date" : date, 				// The date class is happening  
	"course" : int, 			// The course number  
	"group": string, 			// The group that has this class  
	"room" : string,  			// The room class is happening in  
	"amount" : int,  			// How many academic hours  
	"description" : string,  	// Description given by sahtel  
	"code" : string,  			// The code for the class  
	"teacher" : string,  		// The teacher for this class  
	"classStart" : DateTime,  	// The time this class starts  
	"classEnd" : DateTime,  	// The time this class ends  
	"name" : string,  			// name of the class  
	"homeworks" : string[],  	// array of homeworks  
}
```

### POST /tunniplaan
You can post query filters which will base the search on it. The query filters should be a JSON string like this:
```JSON
**{  
	"DateStart": DateTime,  // The starting date of class  
	"DateEnd": DateTime,  	// The ending date of class  
	"Checked": int,  		// 1 - search by Date, 0 - don't search  
	"Classes": string,  	// array of class IDs  
	"Subjects": string,  	// Array of subject IDs  
	"Teachers": string,  	// Array of Teachers IDs  
	"Rooms": string  	// Array of Rooms  
}**
```
This request will return same data structure as `GET /tunniplaan`

### GET /subject
This will get the list of possible subjects. It will return a JSON array containing objects like this:
```JSON
{
	"Id": int, 				// Id of the subject  
	"Name": string,  		// Name of the subject  
	"Code": string  		// Code of the subject  
]}
```
  

### GET /teacher
This will get the list of all the teachers. It will return a JSON array containing objects like this:
```JSON
{
	"Id": int,  
	"Name": string  
}
```