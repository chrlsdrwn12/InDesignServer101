var myDocument = app.documents.add();
var myFile = new File('c:/Kratos/test.indd');
myDocument.save(myFile);
myDocument.close();