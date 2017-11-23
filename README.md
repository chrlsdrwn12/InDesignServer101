# InDesignServer101
InDesign Server Step-By-Step for Beginners like me:

1) Install InDesign Server

2) Run the server by going to the folder where InDesignserver.exe installed and launch a DOS box then type:
<code>Indesignserver –port 8400</code>

*8400 - can be any port number as long as it is open

3) Create a new .jsx file somewhere in your local drive then open it and type:

<code>var myDocument = app.documents.add();</code>
<code>var myFile = new File('c:/Kratos/test.indd');</code>
<code>myDocument.save(myFile);</code>
<code>myDocument.close();</code>

Save it somewhere easy to remember.

4) Go to the folder again where you install the indesignserver and launch another DOS box again and type:
<code>sampleclient -host 8400 "c:/Kratos/indesignserver101.jsx"</code>

Check if the file test.indd was created on c:/Kratos/
