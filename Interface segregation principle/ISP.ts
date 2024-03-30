//The Interface Segregation Principle (ISP) states that clients should not be forced to depend on interfaces they don't use.

// Interface for a document
interface Document {
    open(): void;
    close(): void;
}

// Interface for printable documents
interface PrintableDocument {
    print(): void;
}

// Interface for searchable documents
interface SearchableDocument {
    search(query: string): void;
}

// Class for a simple text document implementing the Document interface
class TextDocument implements Document {
    constructor(private content: string) {}

    open(): void {
        console.log("Text document opened.");
    }

    close(): void {
        console.log("Text document closed.");
    }
}

// Class for a PDF document implementing both Document and PrintableDocument interfaces
class PDFDocument implements Document, PrintableDocument {
    constructor(private filePath: string) {}

    open(): void {
        console.log("PDF document opened.");
    }

    close(): void {
        console.log("PDF document closed.");
    }

    print(): void {
        console.log("PDF document printed.");
    }
}

// Class for a searchable PDF document implementing Document, PrintableDocument, and SearchableDocument interfaces
class SearchablePDFDocument implements Document, PrintableDocument, SearchableDocument {
    constructor(private filePath: string) {}

    open(): void {
        console.log("Searchable PDF document opened.");
    }

    close(): void {
        console.log("Searchable PDF document closed.");
    }

    print(): void {
        console.log("Searchable PDF document printed.");
    }

    search(query: string): void {
        console.log(`Searching for '${query}' in the searchable PDF document.`);
    }
}

// Example usage
const textDoc = new TextDocument("This is a text document.");
textDoc.open();
textDoc.close();

const pdfDoc = new PDFDocument("example.pdf");
pdfDoc.open();
pdfDoc.print();
pdfDoc.close();

const searchablePDFDoc = new SearchablePDFDocument("searchable.pdf");
searchablePDFDoc.open();
searchablePDFDoc.print();
searchablePDFDoc.search("search query");
searchablePDFDoc.close();
