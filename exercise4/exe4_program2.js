/* 2.	Library Book Management:
	•	Create an object book with properties: title, author, year, and isAvailable.
	•	Write a function to:
		•	Update the availability status of the book (isAvailable).
		•	Display the book details in the format: "Title: [title], Author: [author], Year: [year], Available: [isAvailable]".*/

  

function bookDetails(){
    const Book = {
        title : ["book1"],
        author : ["author1"],
        year : [2003],
        isAvailable : ["NotAvailable"]
    }

    Book.isAvailable = ["isAvailable"]
    console.log(Book) 

    }
    
bookDetails()
    
